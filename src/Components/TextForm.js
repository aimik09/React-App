import React from 'react'

export default function TextForm(props) {
  return (
    <div>
<h2>{props.heading}</h2>
<div class="mb-3">
<label for="mytext" class="form-label">Example text Area</label>
<textarea class="form-control" id="mytext" rows="3"></textarea>
</div>
    </div>
  )
}
