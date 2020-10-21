# Tables

[Tables](https://picturepan2.github.io/spectre/elements/tables.html) include default styles for tables and data sets.

```example
<script>
  import { table, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <table use:table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Release date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
        <tr>
          <td>The Godfather</td>
          <td>Crime, Drama</td>
          <td>24 March 1972</td>
        </tr>
        <tr>
          <td>Schindler's List</td>
          <td>Biography, Drama, History</td>
          <td>4 February 1994</td>
        </tr>
        <tr>
          <td>Se7en</td>
          <td>Crime, Drama, Mystery</td>
          <td>22 September 1995</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

Add the `use:table` action to any `<table>` element. The action will add padding, border and emphasized table header.

## Striped tables

```example
<script>
  import { table, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <table use:table={{striped: true, hover: true}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Release date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
        <tr>
          <td>The Godfather</td>
          <td>Crime, Drama</td>
          <td>24 March 1972</td>
        </tr>
        <tr>
          <td>Schindler's List</td>
          <td>Biography, Drama, History</td>
          <td>4 February 1994</td>
        </tr>
        <tr>
          <td>Se7en</td>
          <td>Crime, Drama, Mystery</td>
          <td>22 September 1995</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

Set the property striped: true add zebra striped style. For hoverable table rows, you can set the property hover: true to enable hover style.

```example
<script>
  import { table, cols, col, active } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <table use:table={{striped: true, hover: true}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Genre</th>
          <th>Release date</th>
        </tr>
      </thead>
      <tbody>
        <tr use:active>
          <td>The Shawshank Redemption</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

Use the action `use:active` to make `<tr>` element highlighted.

## Scrollable tables

```example
<script>
  import { table, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col>
    <table use:table={{scroll: true}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Duration</th>
          <th>Genre</th>
          <th>Release date</th>
          <th>Director</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>The Shawshank Redemption</td>
          <td>R</td>
          <td>2h 22min</td>
          <td>Crime, Drama</td>
          <td>14 October 1994</td>
          <td>Frank Darabont</td>
        </tr>
        <tr>
          <td>The Godfather</td>
          <td>R</td>
          <td>2h 55min</td>
          <td>Crime, Drama</td>
          <td>24 March 1972</td>
          <td>Francis Ford Coppola</td>
        </tr>
        <tr>
          <td>Schindler's List</td>
          <td>R</td>
          <td>3h 15min</td>
          <td>Biography, Drama, History</td>
          <td>4 February 1994</td>
          <td>Steven Spielberg</td>
        </tr>
        <tr>
          <td>Se7en</td>
          <td>R</td>
          <td>2h 7min</td>
          <td>Crime, Drama, Mystery</td>
          <td>22 September 1995</td>
          <td>David Fincher</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

Pass the property `scroll` to use:table to have a horizontally scrollable table.
