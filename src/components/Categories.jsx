import React, {useState} from 'react'

function Categories({items, onClick}) {

  const [activeItem, setActiveItems] = useState(null);
    return (
             <div className="categories">
               <ul>
                 <li className={activeItem === null ? 'active' : '' } onClick = {() => setActiveItems(null)}>Все</li>
                   {items && items.map((name, index ) => (
                   <li className={activeItem === index ? 'active' : '' } 
                       onClick={() => setActiveItems(index)} key={`${name}_${index}`}>{name}</li>
                   ))}
               </ul>
            </div>
  )
}
export default Categories;


// class Categories extends React.Component {

//   state = {
//     activeItem: 1,
//   };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     }) 
//   }
  
//   render() {
//     const {items, onClick } = this.props
//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//             {items.map((name, index ) => (
//             <li className={this.state.activeItem === index ? 'active' : '' } 
//                 onClick={() => this.onSelectItem(index)} key={`${name}_${index}`}>{name}</li>
//             ))}
//         </ul>
//       </div>
//     )
//   }
// };
// export default Categories;
