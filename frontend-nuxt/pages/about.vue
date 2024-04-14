<template>
  <div class="internal">
    <h2>About</h2>
    <p>
      Operating systems enforce several hard restrictions when naming files. In Windows systems, a handful of printable ASCII characters such as the less than symbol, the greater than symbol, the vertical bar symbol, and more are not allowed. In Linux systems, the only restricted printable character is the forward slash symbol which is used for subdirectories. In Windows, the dot symbol is often used for file extensions but not entirely restricted. These restrictions can introduce problems when moving files and directories between these systems.
    </p>

    <p>
      This tool addresses this by automatically converting filenames that work well between different operating systems. An easy-to-use interface is provided for users to add all the information desired to be included in their filename without worrying about which characters are restricted or not. It generates a filename users can easily copy and paste to a file manager of their choice.
    </p>
  </div>
</template>

<style>
  .internal > * {
    max-width: 600px;
  }

  .internal {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .internal h2 {
    color: #205EA6;
  }
</style>