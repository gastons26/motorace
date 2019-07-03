import './styles/Galery.scss';

import * as React from "react";
import * as ReactDOM from "react-dom";
import {GalleryImageModel, GalleryModel, GalleryStore} from "../stores/Gallery.store";
import {Spinner} from "./Spinner";

interface IState {
    isLoading: boolean;
    showModal: boolean;
    galleries: GalleryModel[];
    images: GalleryImageModel[];
    activeImage: number;
}

export class GalleryList extends React.Component<{}, IState> {
    private _galleryStore: GalleryStore;

    constructor(props: {}) {
        super(props);

        this.state = {
            isLoading: false,
            galleries: [],
            showModal: false,
            images: [],
            activeImage: 0
        };

        this._galleryStore = new GalleryStore();
    }

    async componentDidMount(): Promise<void> {
        this.isLoading = true;

        try
        {
            const galleries = await this._galleryStore.getGalleries();
            this.setState({
                galleries,
            });
        } finally {
            this.isLoading = false;
        }

    }

    private set isLoading(value: boolean) {
        this.setState({
            isLoading: value
        });
    }

    private set activeImage(value: number) {
        let nextValue = this.state.activeImage + value;
        if(nextValue >= this.state.images.length) {
            nextValue = 0;
        }
        if(nextValue < 0) {
            nextValue = this.state.images.length - 1;
        }
        this.setState({
            activeImage: nextValue
        })
    }

    private get isLaoding(): boolean {
        return this.state.isLoading;
    }

    render() {
        const {galleries} = this.state;

        return (
            <>
                {this.renderModalScreen()}
            <Spinner isLoading={this.isLaoding}>
            <div className="row">
                {galleries.map(gallery => (
                    <div onClick={() => this.openGallery(gallery.id)} key={gallery.id} className="col-lg-3 col-md-6 gallery__block">
                        <div className="card border-0 rounded-0 p-0 mb-5 mb-lg-0 shadow-sm">
                            <img src={gallery.thumbImagePath} alt="" className="img-fluid" />

                            <div className="card-body">
                                <a><h4 className="font-secondary mb-0">{gallery.name}</h4></a>
                                {gallery.description.length > 0 ? (<p className="mb-2">{gallery.description}</p>) : ''}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Spinner>
                </>);
    }

    private openGallery = async (galId: number): Promise<void> => {
        try {
            const images = await this._galleryStore.getImages(galId);

            this.setState({
                images: images,
                showModal: true,
                activeImage: 0
            })
        } finally {

        }
    }

    private renderModalScreen(): React.ReactFragment {

        let {showModal, images, activeImage} = this.state;

        if(showModal) {
            this.hideScrollbar(true);
            return ReactDOM.createPortal((
                <div className="gallery__modal">
                    <div className="row">
                        <div className="col-lg-12">
                            <i className="ti-close gallery__modal--close" onClick={() => this.setState({showModal: false})} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {images[activeImage].imagePath.indexOf('youtube') > 0 ?
                                (<iframe allowFullScreen={true}
                                         src={images[activeImage].imagePath}>
                                </iframe>) :
                                (<img src={images[activeImage].imagePath} />)}

                        </div>
                        <div className="gallery__modal--left" onClick={() => this.activeImage = -1}>
                            <i className="ti-angle-left" />
                        </div>
                        <div className="gallery__modal--right">
                            <i className="ti-angle-right"  onClick={() => this.activeImage = +1} />
                        </div>
                    </div>
                </div>), document.getElementById('modal-screen'));
        }

        this.hideScrollbar(false);
        return null;
    }

    private hideScrollbar(hide: boolean): void {
        const dataContainer = document.getElementsByClassName('main-wrapper');

        if(dataContainer && dataContainer.length > 0) {
            if(hide) {
                document.documentElement.style.overflow = 'hidden';
            } else {
                document.documentElement.style.overflow = '';
            }
        }

    }
}