import "../css/calendario.css";

export default function Calendario() {
  const daysOfMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="calendar">
      <div className="month">
        <h2>Octubre</h2>
      </div>
      <ul className="days">
        <li className="day">Lun</li>
        <li className="day">Mar</li>
        <li className="day">Mié</li>
        <li className="day">Jue</li>
        <li className="day">Vie</li>
        <li className="day">Sáb</li>
        <li className="day">Dom</li>
        {daysOfMonth.map((day) => (
          <li key={day} className="day">
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
}
