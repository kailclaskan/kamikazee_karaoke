import React, {useEffect, useState} from "react";

const LikeSong = ({like, unlike, songTitle, songArtist, user, songs}) => {
    const [included, setIncluded] = useState(false);
    const handleLikeSubmit = (e) => {
        e.preventDefault();
        like(songTitle, songArtist, user);
        setIncluded(true)
    }
    const handleUnlikeSubmit = (e) => {
        e.preventDefault();
        unlike(songTitle, songArtist, user);
        setIncluded(false);
    }
    return(
        <>
            <form className="likeForm" onSubmit={!included ? handleLikeSubmit : handleUnlikeSubmit}>
                <button>{!included ? "Like" : "Unlike"}</button>
            </form>
        </>
    )
}

export default LikeSong;