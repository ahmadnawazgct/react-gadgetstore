import React from 'react'
import styled from 'styled-components';
import { ProductConsumer } from '../context';

export default function ProductFilter() {
    return <ProductConsumer>
        { value =>{
        const {
          search,
          min,
          max,
          price,
          company,
          shipping,
          handleChange,
          storeProducts
        } = value;
let companies = new Set();
companies.add("all");
for(let product in storeProducts) {
  companies.add(storeProducts[product]["company"])
}
companies = [...companies];
return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilteredWrapper>
                {/* text search */}
                <div>
                  <label htmlFor="search">search product</label>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    value={search}
                    onChange={handleChange}
                    className="filter-item"
                  />
                </div>
                {/* end of text search */}

                {/* category search */}

                <div>
                  <label htmlFor="company">company search</label>
                  <select
                    name="company"
                    id="company"
                    value={company}
                    onChange={handleChange}
                    className="filter-item"
                  >
                    {companies.map((company, index)=>{
                      return <option key={index} value={company}>{company}</option>
                    })}
                  </select>
                </div>
                {/* end of category search */}

                {/* price range */}
                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      product price:
                      <span>${price}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    min={min}
                    max={max}
                    value={price}
                    onChange={handleChange}
                    className="filter-price"
                  />
                </div>
                {/* end of price range */}

                {/* free shipping */}
                <div>
                  <label className="mx-2">free shipping</label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    onChange={handleChange}
                    checked={shipping && true}
                  />
                </div>
                {/* end of free shipping */}
              </FilteredWrapper>
            </div>
          </div>
        );
        }}
    </ProductConsumer>
}
const FilteredWrapper = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap:2rem;
    grid-row-gap:1rem;
    label{
        font-weight:bold;
        text-transform:capitalize;
    }
    .filter-item, .filter-price {
        display:block;
        width:100%;
        background:transparent;
        border-radius:0.5rem;
        border:2px solid var(--darkGrey);
    }
`;