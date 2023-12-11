import styles from './PostCardList.module.css';
import PostCard from '../card/PostCard';

export default function PostCardList({ posts }) {
  return (
    <ul className={styles["post-card-list"]}>
      {
        posts.map(post => (
          <li key={post.id}>
            <PostCard {...post} />
          </li>
        ))
      }
    </ul >
  );
}