import React, { useState }from 'react';

const ResCaps = () =>{
  const [colorOne, setColorOne] = useState(null);
  const [colorTwo, setColorTwo] = useState(null);
  const [colorThree, setColorThree] = useState(null);
  const [colorFour, setColorFour] = useState(null);
  const [colorFive, setColorFive] = useState(null);
  const [colorSix, setColorSix] = useState(null);


  return(
    <div>
   <h1>Resisters and Caps</h1>
      Stripe 1:
      <form>
       <input type="radio" name="stripeOne" value="black"
       checked={() =>setColorOne('black')}/>Black
       <input type="radio" name="stripeOne" value="brown"
       checked={() =>setColorOne('brown')} />Brown
       <input type="radio" name="stripeOne" value="red"
       checked={() =>setColorOne('red')} />Red
       <input type="radio" name="stripeOne" value="orange"
       checked={() =>setColorOne('orange')} />Orange
       <input type="radio" name="stripeOne" value="yellow"
       checked={() =>setColorOne('yellow')} />Yellow
       <input type="radio" name="stripeOne" value="green"
       checked={() =>setColorOne('green')} />Green
       <input type="radio" name="stripeOne" value="blue"
       checked={() =>setColorOne('blue')} />Blue
       <input type="radio" name="stripeOne" value="violet"
       checked={() =>setColorOne('violet')} />Violet
       <input type="radio" name="stripeOne" value="gray"
       checked={() =>setColorOne('gray')} />Gray
       <input type="radio" name="stripeOne" value="white"
       checked={() =>setColorOne('white')} />White
      </form>
      Stripe 2:
      <form>
       <input type="radio" name="stripeOne" value="black"
       checked={() =>setColorTwo('black')}/>Black
       <input type="radio" name="stripeOne" value="brown"
       checked={() =>setColorTwo('brown')} />Brown
       <input type="radio" name="stripeOne" value="red"
       checked={() =>setColorTwo('red')} />Red
       <input type="radio" name="stripeOne" value="orange"
       checked={() =>setColorTwo('orange')} />Orange
       <input type="radio" name="stripeOne" value="yellow"
       checked={() =>setColorTwo('yellow')} />Yellow
       <input type="radio" name="stripeOne" value="green"
       checked={() =>setColorTwo('green')} />Green
       <input type="radio" name="stripeOne" value="blue"
       checked={() =>setColorTwo('blue')} />Blue
       <input type="radio" name="stripeOne" value="violet"
       checked={() =>setColorTwo('violet')} />Violet
       <input type="radio" name="stripeOne" value="gray"
       checked={() =>setColorTwo('gray')} />Gray
       <input type="radio" name="stripeOne" value="white"
       checked={() =>setColorTwo('white')} />White
      </form>
      Stripe 3:
      <form>
       <input type="radio" name="stripeOne" value="black"
       checked={() =>setColorThree('black')}/>Black
       <input type="radio" name="stripeOne" value="brown"
       checked={() =>setColorThree('brown')} />Brown
       <input type="radio" name="stripeOne" value="red"
       checked={() =>setColorThree('red')} />Red
       <input type="radio" name="stripeOne" value="orange"
       checked={() =>setColorThree('orange')} />Orange
       <input type="radio" name="stripeOne" value="yellow"
       checked={() =>setColorThree('yellow')} />Yellow
       <input type="radio" name="stripeOne" value="green"
       checked={() =>setColorThree('green')} />Green
       <input type="radio" name="stripeOne" value="blue"
       checked={() =>setColorThree('blue')} />Blue
       <input type="radio" name="stripeOne" value="violet"
       checked={() =>setColorThree('violet')} />Violet
       <input type="radio" name="stripeOne" value="gray"
       checked={() =>setColorThree('gray')} />Gray
       <input type="radio" name="stripeOne" value="white"
       checked={() =>setColorThree('white')} />White
       <input type="radio" name="stripeOne" value="Gold"
       checked={() =>setColorThree('gold')} />Gold
       <input type="radio" name="stripeOne" value="Silver"
       checked={() =>setColorThree('silver')} />Silver
      </form>
      Stripe 4:
      <form>
       <input type="radio" name="stripeOne" value="black"
       checked={() =>setColorFour('black')}/>Black
       <input type="radio" name="stripeOne" value="brown"
       checked={() =>setColorFour('brown')} />Brown
       <input type="radio" name="stripeOne" value="red"
       checked={() =>setColorFour('red')} />Red
       <input type="radio" name="stripeOne" value="orange"
       checked={() =>setColorFour('orange')} />Orange
       <input type="radio" name="stripeOne" value="yellow"
       checked={() =>setColorFour('yellow')} />Yellow
       <input type="radio" name="stripeOne" value="green"
       checked={() =>setColorFour('green')} />Green
       <input type="radio" name="stripeOne" value="blue"
       checked={() =>setColorFour('blue')} />Blue
       <input type="radio" name="stripeOne" value="violet"
       checked={() =>setColorFour('violet')} />Violet
       <input type="radio" name="stripeOne" value="gray"
       checked={() =>setColorFour('gray')} />Gray
       <input type="radio" name="stripeOne" value="white"
       checked={() =>setColorFour('white')} />White
       <input type="radio" name="stripeOne" value="Gold"
       checked={() =>setColorFour('gold')} />Gold
       <input type="radio" name="stripeOne" value="Silver"
       checked={() =>setColorFour('silver')} />Silver
      </form>
      Stripe 5:
      <form>
       <input type="radio" name="stripeOne" value="brown"
       checked={() =>setColorFive('brown')} />Brown
       <input type="radio" name="stripeOne" value="red"
       checked={() =>setColorFive('red')} />Red
       <input type="radio" name="stripeOne" value="orange"
       checked={() =>setColorFive('orange')} />Orange
       <input type="radio" name="stripeOne" value="yellow"
       checked={() =>setColorFive('yellow')} />Yellow
       <input type="radio" name="stripeOne" value="green"
       checked={() =>setColorFive('green')} />Green
       <input type="radio" name="stripeOne" value="blue"
       checked={() =>setColorFive('blue')} />Blue
       <input type="radio" name="stripeOne" value="violet"
       checked={() =>setColorFive('violet')} />Violet
       <input type="radio" name="stripeOne" value="gray"
       checked={() =>setColorFive('gray')} />Gray
       <input type="radio" name="stripeOne" value="Gold"
       checked={() =>setColorFive('gold')} />Gold
       <input type="radio" name="stripeOne" value="Silver"
       checked={() =>setColorFive('silver')} />Silver
      </form>
      Stripe 6:
      <form>
       <input type="radio" name="stripeOne" value="brown"
       checked={() =>setColorSix('brown')} />Brown
       <input type="radio" name="stripeOne" value="red"
       checked={() =>setColorSix('red')} />Red
       <input type="radio" name="stripeOne" value="orange"
       checked={() =>setColorSix('orange')} />Orange
       <input type="radio" name="stripeOne" value="yellow"
       checked={() =>setColorSix('yellow')} />Yellow
       <input type="radio" name="stripeOne" value="blue"
       checked={() =>setColorSix('blue')} />Blue
       <input type="radio" name="stripeOne" value="violet"
       checked={() =>setColorSix('violet')} />Violet
      </form>

      <table>
        <tr>
         <th>Stripes</th>
         <th>Stripe 1</th>
         <th>Stripe 2</th>
         <th>Stripe 3</th>
         <th>Stripe 4</th>
         <th>Stripe 5</th>
         <th>Stripe 6</th>
        </tr>
        <tr>
         <td>4 Stripes</td>
         <td>Digit 1</td>
         <td>Digit 2</td>
         <td>Multiplier</td>
         <td>Tolerance</td>
         <td>N/A</td>
         <td>N/A</td>
        </tr>
        <tr>
         <td>5 Stripes</td>
         <td>Digit 1</td>
         <td>Digit 2</td>
         <td>Digit 3</td>
         <td>Multiplier</td>
         <td>Tolerance</td>
         <td>N/A</td>
      </tr>
        <tr>
         <td>6 Stripes</td>
         <td>Digit 1</td>
         <td>Digit 2</td>
         <td>Digit 3</td>
         <td>Multiplier</td>
         <td>Tolerance</td>
         <td>Temp Coeficient</td>
        </tr>
      </table>
      <br/>
      <table>
      <tr>
        <th>Part</th>
        <th>Black</th>
        <th>Brown</th>
        <th>Red</th>
        <th>Orange</th>
        <th>Yellow</th>
        <th>Green</th>
        <th>Blue</th>
        <th>Violet</th>
        <th>Gray</th>
        <th>White</th>
        <th>Gold</th>
        <th>Silver</th>
      </tr>
      <tr>
        <td>Digits</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>---</td>
        <td>---</td>
      </tr>
      <tr>
        <td>Multiplier</td>
        <td>1</td>
        <td>10</td>
        <td>100</td>
        <td>1K</td>
        <td>10K</td>
        <td>100K</td>
        <td>1M</td>
        <td>10M</td>
        <td>100M</td>
        <td>1G</td>
        <td>.1</td>
        <td>.01</td>
      </tr>
      <tr>
        <td>Tolerance</td>
        <td>---</td>
        <td>+/-1%</td>
        <td>+/-2%</td>
        <td>+/-3%</td>
        <td>+/-4%</td>
        <td>+/-.5%</td>
        <td>+/-.25%</td>
        <td>+/-.1%</td>
        <td>+/-.05%</td>
        <td>---</td>
        <td>+/-5%</td>
        <td>+/10%</td>

      </tr>
      <tr>
        <td>Temp Co</td>
        <td>---</td>
        <td>100</td>
        <td>50</td>
        <td>15</td>
        <td>25</td>
        <td>---</td>
        <td>10</td>
        <td>5</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
        <td>---</td>
      </tr>
      </table>
      <br/>

     Nominal = (Digit1,2,3)*multiplier<br />
     Low Range = Nominal * (1 - (nominal * tolerance)<br />
     High Range = Nominal * (1 + (nominal * tolerance)<br />
    </div>
  )
}

export default ResCaps;
