import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./Activity.module.css";
import { deleteActivity } from "../../redux/actions";

const ActivityCard = (activity) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteActivity(id));
  };

  return (
    <div className={styles.container}>
      {activity && (
        <div className={styles.activity}>
          <p>
            <b>Activity : </b>
            {activity.name}
          </p>
          <p>
            <b>Difficult : </b>
            {activity.difficult}
          </p>
          <p>
            <strong>Duration : </strong>
            {activity.duration} Hours
          </p>
          <p>
            <strong>Season : </strong>
            {activity.season}
          </p>
        </div>
      )}

      <div className={styles.btnDel}>
        <button onClick={handleDelete}>Delete</button>
      </div>

      <div className={styles.btnEd}>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default ActivityCard;
