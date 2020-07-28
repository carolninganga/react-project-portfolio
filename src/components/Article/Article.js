import React from 'react';
import './style.scss';

function Article(props) {
    return (
        <div className="row justify-content-center">
    <div class="col-12">
      <article class="blog-card">
        <div class="blog-card__background">
          <div class="card__background--wrapper">
            <div class="card__background--main" style={{backgroundImage: "url('http://demo.yolotheme.com/html/motor/images/demo/demo_131.jpg')"}}>
              <div class="card__background--layer"></div>
            </div>
          </div>
        </div>
        <div class="blog-card__head">
          <span class="date__box">
            <span class="date__day">11</span>
            <span class="date__month">JAN</span>
          </span>
        </div>
        <div class="blog-card__info">
          <h5>This is blog title</h5>
          <p>
            <a href="#/" class="icon-link mr-3"><i class="fa fa-pencil-square-o"></i> Caroline Ning'ang'a</a>
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vero libero voluptatibus earum? Alias dignissimos quo cum, nulla esse facere atque, blanditiis doloribus at sunt quas, repellendus vel? Et, hic!</p>
          <a href="#/" class="btn btn--with-icon"><i class="fas fa-long-arrow-alt-right"></i>READ MORE</a>
        </div>
      </article>
    </div>
        </div>
    )
}

export default Article;