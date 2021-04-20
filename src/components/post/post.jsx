import dp from "../../static/img/pp.jpg";
import React, { Component } from "react";

// reactions
import upvote from "../../static/svg/icons/post/upvote.svg";
import downvote from "../../static/svg/icons/post/downvote.svg";
import reply from "../../static/svg/icons/post/reply.svg";

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Gemat",
		};
	}

	render() {
		const { text } = this.props;
		return (
			<div className="post">
				<div className="post__head">
					<div className="post__user">
						<div className="user-avatar">
							<img src={dp} alt="" />
						</div>
						<div className="user-info">
							<h5 className="post-user">Gemat</h5>
							<p className="post-username">@gematt</p>
							<p className="post-bio">short bio</p>
						</div>
					</div>
					<div className="post__time">8 hrs ago</div>
				</div>
				<div className="post__body">
					<p className="post__text">{text}</p>
					<div className="post__images">
						<img src="some.jpg" alt="" className="post-image" />
						<img src="" alt="" className="post-image" />
						<img src="" alt="" className="post-image" />
					</div>
				</div>
				<div className="post__footer">
					<div className="post__reactions">
						<div className="reaction upvote">
							<img src={upvote} alt="upvote icon" />
							<small>100</small>
						</div>
						<div className="reaction downvote">
							<img src={downvote} alt="downvote icon" />
							<small>100</small>
						</div>
						<div className="reaction reply">
							<img src={reply} alt="reply icon" />
							<small>100</small>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export { Post };
