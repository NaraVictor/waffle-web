import React from "react";
import { NavLink } from "react-router-dom";
import sampleIcon from "../../static/img/icons/class_icon.jpg";
import { DefaultButton } from "../button/buttons";

const ClassList = ({ title, students, institution, img, classId }) => {
	return (
		<section className="class-list">
			<div className="class-list__img">
				<img src={sampleIcon} alt="" />
			</div>
			<div className="class-list__body">
				<NavLink to={`/classes/${title}`} className="class-list__title">
					{title}
				</NavLink>
				<div className="class-list__detail">
					<NavLink to={`/${institution}`} className="mr-3">
						{institution}
					</NavLink>
					<p>{students} learners</p>
				</div>
			</div>
			<div className="class-list__footer">
				<DefaultButton>Join</DefaultButton>
			</div>
		</section>
	);
};

export { ClassList };
