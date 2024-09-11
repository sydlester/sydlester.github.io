import { Component } from "react";
import styles from "./CaptionedImage.module.css";

export interface CaptionedImageProps {
  imgUrl: string;
  alt: string;
  caption: string;
}

export class CaptionedImage extends Component<CaptionedImageProps> {
  img = require(`../${this.props.imgUrl}`);
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={this.img} alt={this.props.alt} />
        </div>
        <div className={styles.caption}>{this.props.caption}</div>
      </div>
    );
  }
}
