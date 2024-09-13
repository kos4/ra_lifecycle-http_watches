export default function Form({onSubmit}) {
  return (
    <form className="form" action="" onSubmit={onSubmit}>
      <div className="form__group">
        <label htmlFor="nameWatch">Название</label>
        <input type="text" id="nameWatch" name="nameWatch"/>
      </div>
      <div className="form__group">
        <label htmlFor="timeZoneWatch">Временная зона</label>
        <input type="number" step="1" id="timeZoneWatch" name="timeZoneWatch"/>
      </div>
      <div className="form__group">
        <button>Добавить</button>
      </div>
    </form>
  );
}