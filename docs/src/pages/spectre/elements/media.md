# Media

[Media](https://picturepan2.github.io/spectre/elements/media.html) includes responsive images, figures and video classes.

## Images

```example
<script>
  import { img, figure, shape, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={12}>
    <img use:img={"responsive"} use:shape={"rounded"} src="https://picsum.photos/id/237/1200/900" alt="cute black labrador puppy from lorem picsum">
  </div>
</div>
```

Add the action `use:img` with the property `responsive:true` to `<img>` elements. The images will scale with the parent sizes.

```example
<script>
  import { img, figure, text, shape, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={[12, 6]}>
    <figure use:figure>
      <img use:img.fit={"contain"} use:shape.rounded  src="https://picsum.photos/id/237/400/300" alt="cute black labrador puppy from lorem picsum">
      <figcaption use:figure.caption use:text.center>img-fit-contain</figcaption>
    </figure>
  </div>
  <div use:col={[12, 6]}>
    <figure use:figure>
      <img use:img.fit={"cover"} use:shape.rounded src="https://picsum.photos/id/1074/400/300" alt="closeup of proud lioness from lorem picsum">
      <figcaption use:figure.caption use:text={"center"}>img-fit-cover</figcaption>
    </figure>
  </div>
</div>
```

Add the `use:img.fit` and pass `cover` or `cover` as a parameter to `<img>` or `<video>` elements. The media will crop itself to fit inside the element (and you don't need another container). This feature can replace the classic background image trick. Microsoft Edge support is shipped with Build Number 16299+.

## Figure

```example
<script>
  import { img, figure, text, shape, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={12}>
    <figure use:figure>
      <img use:img.responsive use:shape.rounded  src="https://picsum.photos/id/1026/1200/900" alt="sunset over large industrial train statio from lorem picsum">
      <figcaption use:figure.caption use:text.center>img-fit-contain</figcaption>
    </figure>
  </div>
</div>
```

You can use the element `<figure>` for an image with a caption. Add the figure class to `<figure>` element. The images with the img-responsive class will be responsive. And the included class figure-caption will provide basic style for caption. Also, you can use text-left, text-center and text-right for caption alignment.

## Video

For responsive video, add a container with the `use:video.responsive` action.
Insert any YouTube, Youku or other iframe/embed video inside the container. The ratio is 16:9 by default. You may pass `4-3` or `1-1` as a parameter for a 4:3 or 1:1 ratio video container.

```example
<script>
  import { video, cols, col } from '@svelkit/spectre'
</script>

<div use:cols>
  <div use:col={12}>
    <video use:video={{responsive: true, ratio: "4:3"}} controls>
      <source src="static/big_buck_bunny.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>
```
