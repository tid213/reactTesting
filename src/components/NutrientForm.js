import '../App.css';

function NutrientForm() {
    return (
        <form class="form">
          <label>
            Add Nutrient totals for all:
          </label>
          <input type="text" name="prePPM" placeholder='Water PPM before nutes' />
          <input type="text" name="micro" placeholder='Flora Micro 1/2 tsp' />
          <input type="text" name="grow" placeholder='Flora Grow 1/2 tsp' />
          <input type="text" name="flower" placeholder='Flora Flower 1/2 tsp' />
          <input type="text" name="calmag" placeholder='Cal Mag 1/2 tsp' />
          <input type="text" name="ppmTotal" placeholder='Water PPM after nutes' />
          <input type="submit" value="Add Note" />
        </form>
    );
}

export default NutrientForm;