<script src="js/headbreaker.js"></script>
<script src="js/layer.js"></script>

## Basic example

<div id="basic">
</div>

<script>
  const basic = new headbreaker.Canvas(buildLayer('basic', 500, 300), {pieceSize: 50, proximityLevel: 10});

  basic.newPiece({
      structure: {up: headbreaker.None, right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Slot},
      x: 50,
      y: 50,
      data: {id: 'a', color: 'red'}
    });
  basic.newPiece({
    structure: {up: headbreaker.Slot, right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Slot},
    x: 100, y: 50,
    data: {id: 'b', color: '#00D2FF'}
  });
  basic.newPiece({
    structure: {up: headbreaker.Slot, right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Slot},
    x: 150, y: 50,
    data: {id: 'c', color: '#00D2FF'}
  });
  basic.newPiece({
    structure: {up: headbreaker.Slot, right: headbreaker.None, down: headbreaker.Slot, left: headbreaker.Slot},
    x: 150, y: 100,
    data: {id: 'd', color: '#00D2FF'}
  });
  basic.newPiece({
    structure: {up: headbreaker.Slot, right: headbreaker.Slot, down: headbreaker.Slot, left: headbreaker.Slot},
    x: 250, y: 200,
    data: {id: 'e', color: 'green'}
  });
  basic.newPiece({
    structure: {up: headbreaker.Tab, right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Tab},
    x: 350, y: 250,
    data: {id: 'f', color: 'purple'}
  });
  basic.newPiece({
    structure: {up: headbreaker.Slot, right: headbreaker.Tab, down: headbreaker.Slot, left: headbreaker.Tab},
    x: 100, y: 230,
    data: {id: 'g', color: 'black'}
  });
  basic.draw();
</script>

## Soft lines example

<div id="soft">
</div>

<script>
  const soft = new headbreaker.Canvas(buildLayer('soft', 500, 300), {pieceSize: 50, proximityLevel: 10, lineSoftness: 0.2});

  soft.newPiece({
      structure: {up: headbreaker.None, right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Slot},
      x: 50,
      y: 50,
      data: {id: 'a', color: 'red'}
    });
  soft.newPiece({
    structure: {up: headbreaker.Slot, right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Slot},
    x: 100, y: 50,
    data: {id: 'b', color: '#00D2FF'}
  });
  soft.newPiece({
    structure: {up: headbreaker.Slot, right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Slot},
    x: 150, y: 50,
    data: {id: 'c', color: '#00D2FF'}
  });
  soft.newPiece({
    structure: {up: headbreaker.Slot, right: headbreaker.None, down: headbreaker.Slot, left: headbreaker.Slot},
    x: 150, y: 100,
    data: {id: 'd', color: '#00D2FF'}
  });
  soft.newPiece({
    structure: {up: headbreaker.Slot, right: headbreaker.Slot, down: headbreaker.Slot, left: headbreaker.Slot},
    x: 250, y: 200,
    data: {id: 'e', color: 'green'}
  });
  soft.newPiece({
    structure: {up: headbreaker.Tab, right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Tab},
    x: 350, y: 250,
    data: {id: 'f', color: 'purple'}
  });
  soft.newPiece({
    structure: {up: headbreaker.Slot, right: headbreaker.Tab, down: headbreaker.Slot, left: headbreaker.Tab},
    x: 100, y: 230,
    data: {id: 'g', color: 'black'}
  });
  soft.draw();
</script>



## With perfect match

<div id="perfect">
</div>

<script>
  const perfect = new headbreaker.Canvas(
    buildLayer('perfect', 800, 300),
    {pieceSize: 100, proximityLevel: 20, borderFill: 10, strokeWidth: 2, strokeColor: '#00200B', lineSoftness: 0.02});

  perfect.newPiece({
    structure: {up: headbreaker.None, right: headbreaker.Tab, down: headbreaker.Slot, left: headbreaker.None},
    x: 100, y: 100,
    data: {id: 'a', color: '#0EC430'}
  });
  perfect.newPiece({
    structure: {up: headbreaker.None, right: headbreaker.Slot, down: headbreaker.None, left: headbreaker.Slot},
    x: 200, y: 100,
    data: {id: 'b', color: '#098520'}
  });
  perfect.newPiece({
    structure: {up: headbreaker.None, right: headbreaker.None, down: headbreaker.Tab, left: headbreaker.Tab},
    x: 330, y: 80,
    data: {id: 'c', color: '#04380D'}
  });
  perfect.newPiece({
    structure: {up: headbreaker.Slot, right: headbreaker.None, down: headbreaker.None, left: headbreaker.None},
    x: 480, y: 130,
    data: {id: 'c', color: '#054511'}
  });
  perfect.newPiece({
    structure: {up: headbreaker.Tab, right: headbreaker.None, down: headbreaker.None, left: headbreaker.None},
    x: 530, y: 80,
    data: {id: 'c', color: '#04330C'}
  });

  perfect.draw();
</script>



## With background

<div id="background">
</div>

<script>
  let vangogh = new Image();
  vangogh.src = '../vangogh.jpg';
  vangogh.onload = () => {
    console.log(vangogh);
    const background = new headbreaker.Canvas(
      buildLayer('background', 800, 800),
      {pieceSize: 100, proximityLevel: 20, borderFill: 10, image: vangogh, strokeWidth: 2, lineSoftness: 0.12});

    background.newPiece({
      structure: {up: headbreaker.None, right: headbreaker.Tab, down: headbreaker.Slot, left: headbreaker.None},
      x: 100, y: 100,
      data: {id: 'a'}
    });
    background.newPiece({
      structure: {up: headbreaker.None, right: headbreaker.Slot, down: headbreaker.Slot, left: headbreaker.Slot},
      x: 200, y: 100,
      data: {id: 'b'}
    });
    background.newPiece({
      structure: {up: headbreaker.None, right: headbreaker.Slot, down: headbreaker.Tab, left: headbreaker.Tab},
      x: 300, y: 100,
      data: {id: 'c'}
    });
    background.newPiece({
      structure: {up: headbreaker.None, right: headbreaker.Slot, down: headbreaker.Tab, left: headbreaker.Tab},
      x: 400, y: 100,
      data: {id: 'c'}
    });
    background.newPiece({
      structure: {up: headbreaker.None, right: headbreaker.None, down: headbreaker.Tab, left: headbreaker.Tab},
      x: 500, y: 100,
      data: {id: 'c'}
    });

    background.newPiece({
      structure: {up: headbreaker.Tab, right: headbreaker.Tab, down: headbreaker.Slot, left: headbreaker.None},
      x: 100, y: 200,
      data: {id: 'a'}
    });
    background.newPiece({
      structure: {up: headbreaker.Tab, right: headbreaker.Slot, down: headbreaker.Slot, left: headbreaker.Slot},
      x: 200, y: 200,
      data: {id: 'b'}
    });
    background.newPiece({
      structure: {up: headbreaker.Slot, right: headbreaker.Slot, down: headbreaker.Tab, left: headbreaker.Tab},
      x: 300, y: 200,
      data: {id: 'c'}
    });
    background.newPiece({
      structure: {up: headbreaker.Slot, right: headbreaker.Tab, down: headbreaker.Slot, left: headbreaker.Tab},
      x: 400, y: 200,
      data: {id: 'c'}
    });
    background.newPiece({
      structure: {up: headbreaker.Slot, right: headbreaker.None, down: headbreaker.Slot, left: headbreaker.Slot},
      x: 500, y: 200,
      data: {id: 'c'}
    });

      background.newPiece({
      structure: {up: headbreaker.Tab, right: headbreaker.Slot, down: headbreaker.Tab, left: headbreaker.None},
      x: 100, y: 300,
      data: {id: 'a'}
    });
    background.newPiece({
      structure: {up: headbreaker.Tab, right: headbreaker.Tab, down: headbreaker.Slot, left: headbreaker.Tab},
      x: 200, y: 300,
      data: {id: 'b'}
    });
    background.newPiece({
      structure: {up: headbreaker.Slot, right: headbreaker.Slot, down: headbreaker.Tab, left: headbreaker.Slot},
      x: 300, y: 300,
      data: {id: 'c'}
    });
    background.newPiece({
      structure: {up: headbreaker.Tab, right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Tab},
      x: 400, y: 300,
      data: {id: 'c'}
    });
    background.newPiece({
      structure: {up: headbreaker.Tab, right: headbreaker.None, down: headbreaker.Slot, left: headbreaker.Slot},
      x: 500, y: 300,
      data: {id: 'c'}
    });

    background.newPiece({
      structure: {up: headbreaker.Slot, right: headbreaker.Slot, down: headbreaker.Tab, left: headbreaker.None},
      x: 100, y: 400,
      data: {id: 'a'}
    });
    background.newPiece({
      structure: {up: headbreaker.Tab, right: headbreaker.Tab, down: headbreaker.Slot, left: headbreaker.Tab},
      x: 200, y: 400,
      data: {id: 'b'}
    });
    background.newPiece({
      structure: {up: headbreaker.Slot, right: headbreaker.Tab, down: headbreaker.Tab, left: headbreaker.Slot},
      x: 300, y: 400,
      data: {id: 'c'}
    });
    background.newPiece({
      structure: {up: headbreaker.Slot, right: headbreaker.Slot, down: headbreaker.Slot, left: headbreaker.Slot},
      x: 400, y: 400,
      data: {id: 'c'}
    });
    background.newPiece({
      structure: {up: headbreaker.Tab, right: headbreaker.None, down: headbreaker.Slot, left: headbreaker.Tab},
      x: 613, y: 386,
      data: {id: 'c'}
    });

    background.newPiece({
      structure: {up: headbreaker.Slot, right: headbreaker.Tab, down: headbreaker.None, left: headbreaker.None},
      x: 100, y: 500,
      data: {id: 'a'}
    });
    background.newPiece({
      structure: {up: headbreaker.Tab, right: headbreaker.Tab, down: headbreaker.None, left: headbreaker.Slot},
      x: 200, y: 500,
      data: {id: 'b'}
    });
    background.newPiece({
      structure: {up: headbreaker.Slot, right: headbreaker.Tab, down: headbreaker.None, left: headbreaker.Slot},
      x: 300, y: 500,
      data: {id: 'c'}
    });
    background.newPiece({
      structure: {up: headbreaker.Tab, right: headbreaker.Slot, down: headbreaker.None, left: headbreaker.Slot},
      x: 425, y: 530,
      data: {id: 'c'}
    });
    background.newPiece({
      structure: {up: headbreaker.Tab, right: headbreaker.None, down: headbreaker.None, left: headbreaker.Tab},
      x: 570, y: 560,
      data: {id: 'c'}
    });


    background.draw();
  }
</script>