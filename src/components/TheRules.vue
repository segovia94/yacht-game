<template>
  <section class="rules" :class="{ 'rules--hide': !showRules }">
    <div class="rules__wrapper">
      <div class="rules__description">
        <h1 class="rules__title">Rules:</h1>
        <p>
          Roll dice up to 3 times per turn to make combinations. Clicking one of
          the dice will lock it between rolls. Lock in points for a category by
          clicking the points on the scoreboard.
        </p>
      </div>

      <table class="rules__table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Max Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ones</td>
            <td>Total of all "ones" rolled</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Twos</td>
            <td>Total of all "twos" rolled</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Threes</td>
            <td>Total of all "threes" rolled</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Fours</td>
            <td>Total of all "fours" rolled</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Fives</td>
            <td>Total of all "fives" rolled</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Sixes</td>
            <td>Total of all "sixes" rolled</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Full House</td>
            <td>Three of one number and two of another</td>
            <td>28</td>
          </tr>
          <tr>
            <td>Four-of-a-Kind</td>
            <td>At least four dice showing the same number</td>
            <td>24</td>
          </tr>
          <tr>
            <td>Little Straight</td>
            <td>1-2-3-4-5</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Big Straight</td>
            <td>2-3-4-5-6</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Choice</td>
            <td>Total of all dice together</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Yacht</td>
            <td>All five dice showing the same number</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TheRules",

  computed: mapState(["showRules"])
};
</script>

<style>
.rules {
  background-color: #408f3b;
  border-radius: 0.25rem;
  font-size: 0.825rem;
  transition: max-height 0.5s ease-in-out;
  max-height: 700px;
  overflow: hidden;
}

@media screen and (max-width: 929px) {
  .rules--hide {
    max-height: 0;
  }
}

@media screen and (min-width: 930px) {
  .rules {
    font-size: 0.65rem;
  }
}

.rules__wrapper {
  padding: 0.5rem;
}

@media screen and (min-width: 930px) {
  .rules__wrapper {
    padding: 1rem;
  }
}

.rules__description {
  display: flex;
  flex-wrap: nowrap;
  gap: 0.25rem;
  line-height: 1.2;
}

.rules__description p {
  margin-bottom: 1em;
}

.rules__title {
  margin: 0;
  text-transform: uppercase;
}

.rules__table {
  width: 100%;
}

@media screen and (max-width: 929px) {
  .rules__table {
    width: calc(100% + 1rem);
    line-height: 1.3;
    margin: 0 -0.5rem;
  }
}

@media screen and (min-width: 930px) {
  .rules__table {
    font-size: 0.825em;
  }
}

.rules__table th {
  padding-left: 0.25em;
  text-align: left;
  border-bottom: 1px solid white;
}

.rules__table td {
  border-bottom: 1px solid white;
  padding: 0 0.25em 0.25em;
}

.rules__table td:first-child {
  white-space: nowrap;
}

.rules__table td:last-child {
  text-align: center;
}
</style>
