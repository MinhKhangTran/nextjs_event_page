const Clock = ({
  timerDays,
  timerHours,
  timerMinutes,
  timerSeconds,
}: {
  timerDays: number;
  timerHours: number;
  timerMinutes: number;
  timerSeconds: number;
}) => {
  return (
    <>
      <section className="timer-container">
        <section className="timer">
          <div className="clock | d-flex justify-content-center">
            <section className="d-flex | flex-column align-items-center">
              <p className="countdown__number">
                {" "}
                {timerDays < 10 ? "0" : ""}
                {timerDays}
              </p>
              <small>Tage</small>
            </section>
            <section className="d-flex | flex-column align-items-center">
              <p className="countdown__number">
                {timerHours < 10 ? "0" : ""}
                {timerHours}
              </p>
              <small>Stunden</small>
            </section>{" "}
            <section className="d-flex | flex-column align-items-center">
              <p className="countdown__number">
                {timerMinutes < 10 ? "0" : ""}
                {timerMinutes}
              </p>
              <small>Minuten</small>
            </section>{" "}
            <section className="d-flex | flex-column align-items-center">
              <p className="countdown__number">
                {timerSeconds < 10 ? "0" : ""}
                {timerSeconds}
              </p>
              <small>Sekunden</small>
            </section>
          </div>
        </section>
      </section>
    </>
  );
};

export default Clock;
