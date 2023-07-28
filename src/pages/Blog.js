import { useState, useEffect } from 'react';

export default function Blog(props) {
	const [blogPosts, setBlogPosts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const res = await fetch('/api/blog');
				const data = await res.json();
				setBlogPosts(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);
	return (
		<>
			{blogPosts.length ? (
				<>
					{blogPosts.map((blogPost) => (
						<div key={blogPost.title}>{blogPost.body}</div>
					))}
				</>
			) : (
				<h1>welcome to my humble blog</h1>
			)}
		</>
	);
}
