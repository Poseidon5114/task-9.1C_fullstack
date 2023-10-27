import React from 'react';
import './article.css';

function Article() {
    return (
        <div>
            <div className="Featuredarticles">Featured Articles</div>
            <div className="articleList">
                <div className="article1">
                    <a href="#"><img src="https://picsum.photos/200/300" alt="Thumbnail"/></a>
                    <div className="article-content">
                        <div className="article-name">yotube</div>
                        <div className="article-description">"Youtube is a very big corporation which oversees video streaming and live streaming"</div>
                        <div className="article-author">
                            <span className="rating">⭐ 5 </span>Author: jason derulo
                        </div>
                    </div>
                </div>
                <div className="article2">
                    <a href="#"><img src="https://picsum.photos/500/300" alt="Thumbnail"/></a>
                    <div className="article-content">
                        <div className="article-name">Twitch.tv</div>
                        <div className="article-description">"Twitch is a live streaming platform which is booming in the western world"</div>
                        <div className="article-author">
                            <span className="rating">⭐ 5 </span>Author:post malone
                        </div>
                    </div>
                </div>
                <div className="article3">
                    <a href="#"><img src="https://picsum.photos/700/300" alt="Thumbnail"/></a>
                    <div className="article-content">
                        <div className="article-name">facebook gaming</div>
                        <div className="article-description">“Facebook gaming was a startup by meta during the covid era to promote gaming"</div>
                        <div className="article-author">
                            <span className="rating">⭐5 </span>Author: Taylor swift
                        </div>
                    </div>
                </div>
            </div>
            <div className="view_all_articles">
                <a href="#">View all articles</a>
            </div>
        </div>
    );
}

export default Article;