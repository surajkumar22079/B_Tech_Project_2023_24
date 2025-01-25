<div className="button-group">
          <button
            className={`button ${selectedButtoninstructions === 'button1' ? 'active' : 'inactive'}`}
            id="button1"
            onClick={() => handleClickinstructions('button1')}
          >
        Details
          </button>
          <button
            className={`button ${selectedButtoninstructions === 'button2' ? 'active' : 'inactive'}`}
            id="button2"
            onClick={() => handleClickinstructions('button2')}
          >
    Directions
          </button>
          <button
            className={`button ${selectedButtoninstructions === 'button3' ? 'active' : 'inactive'}`}
            id="button3"
            onClick={() => handleClickinstructions('button3')}
          >
            About
          </button>
</div>