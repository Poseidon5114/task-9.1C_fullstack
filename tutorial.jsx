import React from 'react';
import './tutorial.css';

function Tutorials() {
    return (
        <div>
            <div className="featured-tutorials">Featured Tutorials</div>
            <div className="tutorial-list">
                <div className="tutorial1">
                    <a href="#"><img src="https://picsum.photos/1000/300" alt="Thumbnail" /></a>
                    <div className="tutorial-content">
                        <div className="tutorial-name">How to use OBS</div>
                        <div className="tutorial-description">OBS is the best platform to record your screen.</div>
                        <div className="tutorial-author">
                            <span className="rating">⭐ 5 </span>Author: Yashmit gauba
                        </div>
                    </div>
                </div>
                <div className="tutorial2">
                    <a href="#"><img src="https://picsum.photos/1100/300" alt="Thumbnail" /></a>
                    <div className="tutorial-content">
                        <div className="tutorial-name">How to buy the best PC</div>
                        <div className="tutorial-description">Building your own PC can be a bit confusing at times..</div>
                        <div className="tutorial-author">
                            <span className="rating">⭐ 5 </span>Author: central cee
                        </div>
                    </div>
                </div>
                <div className="tutorial3">
                    <a href="#"><img src="https://picsum.photos/800/300" alt="Thumbnail" /></a>
                    <div className="tutorial-content">
                        <div className="tutorial-name">How to find the right platform</div>
                        <div className="tutorial-description">Sometimes finding the right platform to start your career can be a bit confusing at a new platform.</div>
                        <div className="tutorial-author">
                            <span className="rating">⭐ 5 </span>Author: Kendrick lammar
                        </div>
                    </div>
                </div>
            </div>
            <div className="see-all-tutorials">
                <a href="#">See all tutorials</a>
            </div>
        </div>
    );
}

export default Tutorials;