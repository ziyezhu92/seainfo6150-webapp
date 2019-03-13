import React from 'react';

const Article = ({title, date, author, children}) => {
	return(
		<div>
			<h1 id = 'title'>{title}</h1>
			<h2 id = 'date'><time>{date}</time></h2>
			<h2 id = 'author'><address>{author}</address></h2>
			<hr/>
			{children}
		</div>
	);
};

export default Article;
