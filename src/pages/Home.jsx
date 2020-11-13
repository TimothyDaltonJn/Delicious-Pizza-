import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { Categories, Sortpopup, PizzaBlock } from '../components/';
import {setCategory} from '../redux/actions/filters';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortName = [
  {name:'по популярности', type:'popular'},
  {name:'цене', type:'price'},
  {name:'алфавите', type:'alphabet'}
  ]

function Home() {

  const dispatch = useDispatch();
  const { items } = useSelector(({ pizzas,  }) => {
    return {
      items: pizzas.items,
    };
  });

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

    return (
        <div className="container">
          <div className="content__top">
            <Categories
              onClickItem={onSelectCategory}
              items={categoryNames}
            />
            <Sortpopup items={sortName} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
 
            {
              items.map( obj =>
              <PizzaBlock key={obj.id} {...obj}/>)
            }
          </div>
          </div>
    )
}

export default Home
