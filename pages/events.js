import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const LightboxContext = React.createContext();
const { Provider, Consumer } = LightboxContext;

class MyProvider extends React.Component {
  state = {
    isOpen: false,
    isActive: false,
    isLoading: false,
    activeImageId: null,
    setActiveImageId: (id) => this.setActiveImageId(id),
    toggleActive: () => this.toggleActive(),
    hideLightbox: () => this.hideLightbox(),
    showPrevImage: () => this.showPrevImage(),
    showNextImage: () => this.showNextImage(),
    data: [
      {
        id: 0,
        small: 'https://images.unsplash.com/photo-1510412094233-53186308173b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af8eae835a4287e33f92411138ffc0f9&auto=format&fit=crop&w=1950&q=80?auto=compress&fit=crop&w=224&q=40',
        dataFull: 'https://images.unsplash.com/photo-1510412094233-53186308173b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af8eae835a4287e33f92411138ffc0f9'
      },
      {
        id: 1,
        small: 'https://images.unsplash.com/photo-1516161786189-4c01a74daa94?ixlib=rb-0.3.5&s=5720ace14b95cf35d11b4b1e7231e1f6?auto=compress&fit=crop&w=224&q=40',
        dataFull: 'https://images.unsplash.com/photo-1516161786189-4c01a74daa94?ixlib=rb-0.3.5&s=5720ace14b95cf35d11b4b1e7231e1f6' 
      },
      {
        id: 2,
        small: 'https://images.unsplash.com/photo-1422065254131-0959ca26ded4?ixlib=rb-0.3.5&s=e13052f68effa67a8de344863c5b9997?auto=compress&fit=crop&w=224&q=40',
        dataFull: 'https://images.unsplash.com/photo-1422065254131-0959ca26ded4?ixlib=rb-0.3.5&s=e13052f68effa67a8de344863c5b9997'
      },
      {
        id: 3,
        small: 'https://images.unsplash.com/photo-1486666188991-b5be4844c800?ixlib=rb-0.3.5&s=24024135f79e7e1157dd40d1819d066e?auto=compress&fit=crop&w=224&q=40',
        dataFull: 'https://images.unsplash.com/photo-1486666188991-b5be4844c800?ixlib=rb-0.3.5&s=24024135f79e7e1157dd40d1819d066e' 
      },
      {
        id: 4,
        small: 'https://images.unsplash.com/photo-1508844958472-0762647aebac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=870693ca86035205c5161ee55421347c?auto=compress&fit=crop&w=224&q=40', 
        dataFull: 'https://images.unsplash.com/photo-1508844958472-0762647aebac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=870693ca86035205c5161ee55421347c'
      },
      {
        id: 5,
        small: 'https://images.unsplash.com/photo-1473789810014-375ed569d0ed?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41fd11c0f441d3bee2e6225054604dc9?auto=compress&fit=crop&w=224&q=40', 
        dataFull: 'https://images.unsplash.com/photo-1473789810014-375ed569d0ed?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41fd11c0f441d3bee2e6225054604dc9'
      }, 
    ]
  };

  setActiveImageId = (id) => {
    if (id === null) {
      this.setState({
        activeImageId: null,
        isOpen: false,
        isActive: false
      })
    } 
    else {
      this.setState({
        activeImageId: id,
        isOpen: true,
        isLoading: true,
      });
    }
  }

  toggleActive = () => {
    this.setState({
      isLoading: false,
      isActive: true,
    });
  }

  hideLightbox = () => {
    this.setState({
      isOpen: false,
      isLoading: false,
      isActive: false,
    });
  }
  
  showPrevImage = () => {
    if (this.state.activeImageId + 1 >= 0) {
      this.setState(prevState => ({
        isLoading: true,
        isActive: false,
        activeImageId: prevState.activeImageId - 1
      }));
    }
  }
  
  showNextImage = () => {
    if (this.state.activeImageId + 1 < this.state.data.length) {
      this.setState(prevState => ({
        isLoading: true,
        isActive: false,
        activeImageId: prevState.activeImageId + 1
      }));
    }
  }
  
  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}

// applications classnames
const classes = {
  lightbox: 'lightbox',
  wrapper: 'lightbox__wrapper',
  content: 'lightbox__content',
  contentImage: 'lightbox__content__image',
  display: 'lightbox__display',
  displayImage: 'lightbox__display__image',
  loading: 'lightbox--loading',
  active: 'lightbox--active',
  loader: 'lightbox__loader',
  prev: 'lightbox__previous',
  next: 'lightbox__next'
};

class LightboxWrapper extends React.Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <LightboxContent />
        <Consumer>
          {(context) => (
            <Lightbox values={context}/>
          )}
        </Consumer>
      </div>
    );
  }
}

class LightboxContent extends React.Component {
  renderContentImages = (context) => {
    return context.data.map(data => (
      <LightboxContentImage 
        key={data.small} 
        src={data.small} 
        imageId={data.id} 
      />
    ));
  }
 
  render() {
    return (
      <Consumer>
        {(context) => (
           <div className={classes.content}>
            {this.renderContentImages(context)}
          </div>
        )}
      </Consumer>
    );
  }
} 

class LightboxContentImage extends React.Component {
  handleClick = (context, id) => {
    return () => {
      context.setActiveImageId(id);
    }
  }
  render() {
    return (
      <Consumer>
        {(context) => (
          <div className={classes.contentImage} onClick={this.handleClick(context, this.props.imageId)}>
            <img src={this.props.src} alt=""/>
          </div>
        )}
      </Consumer>
    );
  }
}

class Lightbox extends React.Component {
  componentDidMount() {
    this.lightbox.addEventListener('click', ({ target }) => {
      if (target === this.lightbox && (this.props.values.isActive || this.props.values.isLoading)) {
        this.props.values.hideLightbox();
      }
    });
  }

  render() {
    const { isActive, isLoading, isOpen, activeImageId } = this.props.values;
    const activeClass = isActive ? classes.active : '';
    const loadingClass = isLoading ? classes.loading : '';
 
    return (
      <div className={`${classes.lightbox} ${activeClass} ${loadingClass}`} ref={(ref) => this.lightbox = ref}>
        {isLoading && !isActive ? <Loader /> : null}
        <Consumer>
          {(context) => (
            <React.Fragment>
              <NavButton classname={classes.prev} handleNextImage={context.showPrevImage}>
                <span>&lt;</span>
              </NavButton>
              <LightboxDisplayImage 
                imageLoaded={context.toggleActive}
                values={context}
              />
              <NavButton classname={classes.next} handleNextImage={context.showNextImage}>
                <span>&gt;</span>
              </NavButton>
            </React.Fragment>
          )}
        </Consumer>
      </div>
    )
  }
}

class LightboxDisplayImage extends React.Component {
  state = {
    currentImage: null,
    cachedImages: {},
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.values === this.props.values) {
      return;
    }
    else {
      const { activeImageId } = nextProps.values;
      const isInCache = this.checkCache(activeImageId);

      if (isInCache) {
        this.setState((prevState) => ({ currentImage: prevState.cachedImages[activeImageId] }));
      }
      else {
        const imgSrc = nextProps.values.data[activeImageId].dataFull;
        this.setState((prevState) => {
          const updatedCache = Object.assign({}, prevState.cachedImages, {[activeImageId]: imgSrc});
          return { 
            cachedImages: updatedCache,
            currentImage: imgSrc
          }
        });
      }
    }
  }

  handleOnLoad = () => {
    this.props.imageLoaded();
  }
    
  checkCache = (index) => {
    const { cachedImages } = this.state;
    if (!cachedImages.hasOwnProperty(index)) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className={classes.display}>
        {!this.state.currentImage ? 
          null 
        : (
          <Image src={this.state.currentImage} classname={classes.displayImage} onLoad={this.handleOnLoad} />
        )}
      </div>
    )
  }
}

const Loader = () => (
  <div className={classes.loader}>
    <div></div>
  </div>
);

const Image = ({ src, classname, onLoad, alt = '' }) => {
  return (
    <img src={src} className={classname} alt={alt} onLoad={onLoad} />
  );
};

const NavButton = ({ classname, handleNextImage, children }) => (
  <button className={classname} onClick={handleNextImage}>
    {children}
  </button>
);

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  }
  
  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState(state => ({ hasError: true }));
  }

  render() {
    if (this.state.hasError) {
      return (
        <p>Sorry, something went wrong. Please check the console</p>
      );
    } else {
      return (
        <div>{this.props.children}</div>
      );
    }
  } 
}

class App extends React.Component {
  render() {
    return (
      <MyProvider>
        <ErrorBoundary>
          <LightboxWrapper /> 
        </ErrorBoundary>
      </MyProvider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

export default ProjectsPage;
