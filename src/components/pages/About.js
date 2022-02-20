import React from "react";
import "../assets/css/about.css";
import avatar from "../assets/images/avatar.png";

export default function About() {
  return (
    <div id="about-container">
      <h2 class="page-title">About Me</h2>
      <img id="avatar" src={avatar} alt="Author's avatar" />
      <h4 id="description">Description</h4>
      <p id="desc-text">
        Full Stack Developer with a background in design. I recently earned a
        certificate in full stack development from Rutgers University, which
        helped me develop new skills in HTML, CSS, JavaScript , and etc. The
        boot camp was rigorous but helped me to learn new technologies and
        improved my ability to solve problems. Many times during the program I
        would have an error with the code I was developing and would have to
        patiently sort it out. Even the most minor of issues could take hours to
        fix but by overcoming this it helped me learn patience and increase my
        focus. Also I had to work with many different people to finish a project
        and this helped develop my communication skills which allowed me to work
        with others comfortably. Even if I did not fully agree with my
        colleagues, we would be able to calmly and efficiently work it out
        together. Whether it be disagreements between one another about the
        direction of our project or overcoming the challenges our projects would
        create, we were able to do it together and it was a great experience.
        Being a Full Stack Developer gives me the opportunity to grow alongside
        the technologies that are developed daily and work with both ends of an
        application. Which is perfect for me since I’m passionate about coding
        and I’m constantly trying to expand my knowledge on the subject so to be
        able to work in a career that helps me grow is perfect. Especially since
        I’m a person who is earnest when it comes to my desire to better myself
        whether it be personally or professionally and does not like it when a
        person is defined by their failures. Many times during the boot camp I
        would learn the best lessons from trying and failing and that fits with
        what type of person I am and what I think a Full Stack Developer should
        be.
      </p>
    </div>
  );
}
