import ApploadUser from "../AploadUser";

export default function ApploadList({ users, notLast }) {
  return (
    <div className="appload-list-container">
      <div className="row">
        {(users[4] && (
          <div className="col">
            <ApploadUser user={users[4]} rank={5} />
          </div>
        )) || <div className="col"></div>}

        {(users[2] && (
          <div className="col">
            <ApploadUser user={users[2]} rank={3} />
          </div>
        )) || <div className="col"></div>}

        {(users[0] && (
          <div className="col">
            <ApploadUser user={users[0]} rank={1} />
          </div>
        )) || <div className="col"></div>}

        {(users[1] && (
          <div className="col">
            <ApploadUser user={users[1]} rank={2} />
          </div>
        )) || <div className="col"></div>}

        {(users[3] && (
          <div className="col">
            <ApploadUser user={users[3]} rank={4} />
          </div>
        )) || <div className="col"></div>}
      </div>
    </div>
  );
}
