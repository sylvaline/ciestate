import React from 'react'

function Button({text}) {
    return (
        <button>
                {text}{" "}
                <span>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </button>
    )
}

export default Button
