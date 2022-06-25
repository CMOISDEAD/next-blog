import { SiMinutemailer } from "react-icons/si";

export const Suscribe = () => {
  return (
    <div className="my-1">
      <h5>Suscribe Email</h5>
      <div className="card my-2">
        <div className="card-body">
          <div className="card-title">
            <span className="text-blue">
              <SiMinutemailer />{" "}
            </span>
            Subscribe your email to receive alerts when a new post is added.
          </div>
          <form className="">
            <div className="mb-3">
              <label for="UserName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="UserName"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-3">
              <label for="UserEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="UserEmail"
                aria-describedby="emailHelp"
                placeholder="user@email.com"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="AlertCheck"
              />
              <label className="form-check-label" for="AlertCheck">
                Receive all updates?
              </label>
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
