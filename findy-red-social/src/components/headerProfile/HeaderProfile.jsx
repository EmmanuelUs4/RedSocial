import React from 'react';
import { Followbtn, Likebtn, Imgportada, Imgprofile, Division, Diviinfo, Improf, Likfoll, Follnum, Millfol, Letras, Contenido, Divbtn   } from './styledProfile';
import portada from "../../assets/imgprofile/portada.png"
import imperfil from "../../assets/imgprofile/Group12.png"

const HeaderProfile = ({username, followers, likes, isFollowing, isLiked, onFollowClick, onLikeClick }) => {
  const handleFollowClick = () => {
    onFollowClick();
  };

  const handleLikeClick = () => {
    onLikeClick();
  };

  return (
    <Division >
      <div>
      <Imgportada src={portada} alt="Cover"  />
      </div>
      <Imgprofile>
      <Improf src={imperfil} alt="Profile"  />
      </Imgprofile>
      <Diviinfo>
      <Likfoll>
        <Follnum>
          <Millfol>10.7 M</Millfol>
          <Letras>Followers</Letras>
        </Follnum>
        <Follnum>
          <Millfol>108.3 M</Millfol>
          <Letras>Likes</Letras>
        </Follnum>
      </Likfoll>
      <Contenido>
      <h3>Jennie Kim</h3>
      <h5>J. Hello Guys</h5>
      <h5>Follow me and like my post</h5>
      </Contenido>
      <Divbtn  >
        <Followbtn onClick={handleFollowClick}>{isFollowing ? 'Unfollow' : 'Follow'}</Followbtn>
        <Likebtn onClick={handleLikeClick}>{isLiked ? 'Unlike' : 'Message'}</Likebtn>
      </Divbtn >
      </Diviinfo>
    </Division>
  );
};

export default HeaderProfile;