import { Helmet, HelmetProvider } from "react-helmet-async";

import BgVid from "../Assets/Videos/video.mp4";
import Image1 from "../Assets/Images/story-img-1.jpg";
import Image2 from "../Assets/Images/story-img-2.jpg";

import "../Styles/pm__comments.css";

const PM__Comments = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phoenix Media | Comments</title>
        </Helmet>
      </HelmetProvider>
      <div className="pm__comments-wrap">
        <div className="pm__comments-wrap_video-wrap">
          <video autoPlay muted loop>
            <source src={BgVid} type="video/mp4" />
          </video>
        </div>
        <div className="pm__comments-wrap_content-wrap">
          <div className="pm__comments-wrap_content-wrap_comment-bg">
            <div className="pm__comments-wrap_content-wrap_comment-content">
              <img src={Image1} alt="Image1" />
              <div className="pm__comments-wrap_content-wrap_comment-txt">
                <h1>Comment 1 Heading</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                  repellat, dolorem nobis laborum totam dolorum odio aliquid
                  commodi dolor veniam natus pariatur numquam sapiente officiis
                  consequatur illo blanditiis consectetur tempora, cupiditate
                  doloremque! Nulla, obcaecati molestiae officia quas maxime
                  expedita soluta distinctio. Ullam neque ea eos id voluptatem
                  voluptas ut atque.
                </p>
              </div>
            </div>
          </div>
          <div className="pm__comments-wrap_content-wrap_comment-bg">
            <div className="pm__comments-wrap_content-wrap_comment-content">
              <img src={Image2} alt="Image2" />
              <div className="pm__comments-wrap_content-wrap_comment-txt">
                <h1>Comment 2 Heading</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                  repellat, dolorem nobis laborum totam dolorum odio aliquid
                  commodi dolor veniam natus pariatur numquam sapiente officiis
                  consequatur illo blanditiis consectetur tempora, cupiditate
                  doloremque! Nulla, obcaecati molestiae officia quas maxime
                  expedita soluta distinctio. Ullam neque ea eos id voluptatem
                  voluptas ut atque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PM__Comments;
