import React from 'react'

export default function CartColumns() {
    return (
      <div className="containaer-fluid d-none d-lg-block text-center py-5">
        <div className="row">
          {/* start of column */}
          <div className="col-lg-2">
            <p className="text-uppercase">product</p>
          </div>
          {/* end of column */}
          {/* start of column */}
          <div className="col-lg-2">
            <p className="text-uppercase">name of product</p>
          </div>
          {/* end of column */}

          {/* start of column */}
          <div className="col-lg-2">
            <p className="text-uppercase">price</p>
          </div>
          {/* end of column */}

          {/* start of column */}
          <div className="col-lg-2">
            <p className="text-uppercase">quantity</p>
          </div>
          {/* end of column */}

          {/* start of column */}
        <div className="col-lg-2">
            <p className="text-uppercase">remove</p>
          </div>
          {/* end of column */}
          {/* start of column */}
          <div className="col-lg-2">
            <p className="text-uppercase">total</p>
          </div>
          {/* end of column */}
        </div>
      </div>
    );
}
