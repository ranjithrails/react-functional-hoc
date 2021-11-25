
import '../App.css'
// const enhancedComponent = (OriginalComponent, name) => {
  const enhancedComponent = (name) => (OriginalComponent) => {

  const newComponet = (props) => {
    console.log('HOC component');
    return (
      <div className="border">
      <h1>{name.fname}HOC Component {OriginalComponent.name}</h1>
      <OriginalComponent {...props}/>
       </div>
    )
  }
  return newComponet;
}

export default enhancedComponent;