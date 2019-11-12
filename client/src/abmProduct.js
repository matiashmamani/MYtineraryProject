const mapStateToProps = (state) => {
    return {
        products: state
    }
}

export default connect(mapStateToProps)(abmProduct);