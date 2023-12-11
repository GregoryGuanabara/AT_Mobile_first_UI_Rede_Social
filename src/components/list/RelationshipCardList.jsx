import styles from './RelationshipCardList.module.css';
import RelationshipCard from '../card/RelationshipCard';

export default function RelationshipCardList({ relationships, is_friend = false }) {
  return (
    <ul className={styles["friend-card-list"]}>
      {
        relationships.map(relationship => (
          <li key={relationship.id}>
            <RelationshipCard is_friend={is_friend} {...relationship} />
          </li>
        ))
      }
    </ul >
  );
}