import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import CompanyService from '../services/CompanyService'
import UserService from '../services/UserService'
import FavoutiteService from '../services/FavoutiteService'
import CompanyItem from './CompanyItem'

class Company extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rawCompanyList: [],
            processedList: [],
            userId: '',
            enableSort: false,
            searchKey: ''
        }
        this.toggleFavourite = this.toggleFavourite.bind(this)
        this.toggleSort = this.toggleSort.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
    }

    componentDidMount() {
        this.getCompanyList()
    }

    getCompanyList() {
        CompanyService.getCompanyList()
            .then(response => {
                let userId = UserService.userId()
                let onlyFav = this.props.onlyFav
                let rawCompanyList = response.map(list => ({
                    ...list,
                    isFavourite: list.favourites.some(fav => fav.userId === userId)
                })).filter(list => !onlyFav || list.isFavourite)
                this.setState({ 
                    rawCompanyList: rawCompanyList,
                    processedList: rawCompanyList,
                    userId: UserService.userId()
                })
            })
            .catch(err => {
                console.log(err)
                this.props.history.push("/login");
            })
    }

    toggleFavourite(company) {
        let userId = this.state.userId
        if (company.isFavourite) {
            let fav = company.favourites.find(fav => fav.userId === userId)
            FavoutiteService.removeFavourite(fav.id)
            .then((response) => {
                this.getCompanyList()
            }).catch(err => console.log(err))
        } else {
            FavoutiteService.addFavourite({
                userId: userId,
                comapanyId: company.id
            }).then((response) => {
                this.getCompanyList()
            }).catch(err => console.log(err))
        }
    }

    processList() {
        debugger
        const { rawCompanyList, searchKey, enableSort } = this.state
        let processedList = rawCompanyList.filter(list => list.name.includes(searchKey))
        if (enableSort) {
            processedList.sort()
        }
        this.setState({ processedList: processedList })
    }

    toggleSort() {
        this.setState({enableSort: !this.state.enableSort}, () => this.processList())
    }

    onSearchChange(e) {
        this.setState({searchKey: e.target.value}, () => this.processList())
    }

    render() {
        const { processedList, userId, enableSort } = this.state
        return (
            <div className="section">
                { this.props.onlyFav
                    ? <Link className="btn grey"  to="/">BACK</Link>
                    : <Link className="btn"  to="/favourite">Favourite</Link>
                }
                <button onClick={this.toggleSort} className={`btn right ${enableSort?"":"grey"}`}>
                    <i className="fa fa-sort"></i>
                </button>
                <div className="nav-wrapper">
                    <form autoComplete="off">
                        <div className="input-field">
                            <input id="search" type="search" onChange={this.onSearchChange} placeholder="search here" />
                            <label className="label-icon" htmlFor="search"><i className="fa fa-search"></i></label>
                            {/* <i className="fa fa-close"></i> */}
                        </div>
                    </form>
                </div>
                {
                    processedList.length ? (
                        <ul className="collection">
                            {
                                processedList.map(item => (
                                    <CompanyItem item={item}
                                        key={item.name} userId={userId}
                                        toggleFavourite={this.toggleFavourite}
                                    ></CompanyItem>
                                ))
                            }
                        </ul>
                    ) : (
                        <div className="section">No Company available</div>
                    )
                }
            </div>
        )
    }
}

export default withRouter(Company)
