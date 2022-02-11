import React from "react";
import "./gallery.css";

export default function VideoGalleryTab() {
  return (
    <div className="video-card-wrapper">
      <div className="video-card">
        <iframe
          className="video-player"
          src="https://www.youtube.com/embed/rX4ZWsp6J0E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          className="video-player"
          src="https://www.youtube.com/embed/wRQaHctMtFM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="video-card gallery-alternate">
        <iframe
          className="video-player"
          src="https://www.youtube.com/embed/rX4ZWsp6J0E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="description-container">
          <h2>Ullamco mollit cupidatat aliquip ipsum dolore.</h2>
          <p>
            Fugiat quis est pariatur culpa. Eiusmod non nisi veniam consequat
            voluptate est in in ex veniam. Voluptate id consectetur elit minim
            sint esse commodo in minim et velit. Anim excepteur laboris pariatur
            aute cupidatat consequat sit est voluptate laborum irure velit
            reprehenderit. Excepteur esse aliqua ullamco sit ad nisi Lorem aute.
            Ullamco anim qui eu exercitation cillum ut est voluptate dolore
            commodo proident minim consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
