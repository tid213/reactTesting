import '../App.css';

function NutrientForm() {
    return (
        <form class="form">
          <label>
            PreMix water PPM:
            <input type="text" name="prePPM" />
          </label>
          <label>
            Micro:
            <input type="text" name="micro" />
          </label>
          <label>
            Grow:
            <input type="text" name="grow" />
          </label>
          <label>
            Flower:
            <input type="text" name="flower" />
          </label>
          <label>
            CalMag:
            <input type="text" name="calmag" />
          </label>
          <input type="submit" value="Add Note" />
        </form>
    );
}

export default NutrientForm;