import React from 'react';
 
import EnhancedComponent from '../HOC/hoc'
const Sample = ({title}) => {
  console.log('sample component')
  return (
    <h1> {title} Sample Component</h1>
  )
}

// export default EnhancedComponent(Sample, {fname: 'Ranjith'});
export default EnhancedComponent({fname: 'Ranjith'})(Sample);