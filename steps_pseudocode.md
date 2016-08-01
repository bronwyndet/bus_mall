Select three random images to display
  - have images available (need to build image objects with properties for name, path, num_displays, num_votes)
  - select random images
    - use math randomizer to select an array index
    - images should not have just been displayed
      - (need a comparison,
          - if just shown re-randomize and pick new
          - if not just shown, then render to page)
  - display the images (3 in a row)
  - track how many times image has displayed (incrementer i++)

Vote for an image
  - need an eventListener() for 'clicks'
  - need event.target for hearing the click on each image
    - need ids on HTML tags to target images
  - need event.target for input error ('please click on an image')
    - need id on section surrounding images
  - eventHandler() to
    - tally votes
    - trigger new randomizer
    - trigger new render
    - count number of votes (incrementer i++)

Upon Reaching 25 votes (use 3 for build phase)
  - removeEventListener() to stop handler function (or redirect to different eventHandler?? saying stop clicking!)
  - render totals in list form to page (to be changed to a graph later)
