/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/level1.png";

const imageAltText = "portfolio desk image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "resumenia",
    description:
      "resumenia is a resume builder that helps you create a professional resume in minutes. It's easy to use and 100% free. Build your perfect resume in minutes!",
    url: "https://hariomdhage.github.io/Resumania",
  },
  {
    title: "Envirover",
    description:
      "Contributed sketch note imageryfor enviroment These help provide visual representation of what is being taught.",
    url: "https://www.youtube.com/watch?v=EN6d0oapxxM",
  },
  {
    title: "voice assisant",
    description:
      "voice assiant is a voice controlled personal assistant. It can perform tasks and services for an individual based on verbal commands.",
    url: "https://www.youtube.com/watch?v=JlM_KC4nRf4&t=10s",
  },
  {
    title: "resume builder",
    description:
      "resume buider is a web application that helps you create a professional resume in minutes. It's easy to use and 100% free. Build your perfect resume in minutes!",
    url: "https://www.youtube.com/watch?v=ne_IlGcjDik&t=6s",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
