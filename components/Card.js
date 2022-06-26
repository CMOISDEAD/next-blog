import moment from "moment";

export const Card = ({ header, author, timestamp }) => {
  return (
    <a className="card-link">
      <div className="card h-100">
        <div className="card-body">
          <div className="card-title">{header}</div>
          <div className="card-text">
            Elit debitis fuga dolore aperiam neque Illum obcaecati saepe
            perferendis libero ipsam maiores ut. Sed quod sed doloribus cumque
            consectetur Neque sapiente ipsam provident ducimus illo.
            Perspiciatis error excepturi eaque.
          </div>
        </div>
        <div className="card-footer text-center">
          <div className="card-text">
            <small className="text-muted">
              {moment(moment.unix(timestamp / 1000)).fromNow()} - {author}
            </small>
          </div>
        </div>
      </div>
    </a>
  );
};
