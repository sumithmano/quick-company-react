import React from 'react'

let style = {
    background: "rgba(1, 2, 3, 0.22)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "40",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
}

const Loader = () => (
    <div style={style}>
        <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div><div className="gap-patch">
                    <div className="circle"></div>
                </div><div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
    </div>
)

export default Loader