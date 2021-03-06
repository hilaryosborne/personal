import React from 'react'
import radium from 'radium'
import { withRouter } from 'react-router-dom'
import PropType from 'prop-types'
import classnames from 'classnames'
import { mediaQueryBelow } from 'scripts/styles'

const whiteLogo = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MzMgMTE0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmxvZ29fd2hpdGU8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI5LjY2LDYxLjEySDE0LjQzVjc1Ljg2SDVWMzkuMThoOS40NlY1Mi44N0gyOS42NlYzOS4xOGg5LjQ2Vjc1Ljg2SDI5LjY2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ1LjE3LDM5LjE4aDkuNDZWNzUuODZINDUuMTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNjAuNjgsMzkuMThoOS40NlY2Ny42MUg4NC44OHY4LjI1SDYwLjY4WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTExMi43MSw3MC4zSDk3LjQ4bC0xLjg3LDUuNTZIODUuMzJMOTkuMTMsMzkuMThIMTExbDEzLjg1LDM2LjY4SDExNC41OFptLTEyLjc2LThoMTAuMjlsLTUuMTctMTQuOVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNDEuMzEsNjMuNDNoLTQuODRWNzUuODZIMTI3VjM5LjE4aDE4LjM3YzguMTQsMCwxMi43Niw1LjM5LDEyLjc2LDEyLjIxLDAsNi4zOC0zLjkxLDkuNzgtNy4zMiwxMWw3LjQ4LDEzLjQ4SDE0Ny40N1pNMTQ0LDQ3LjE1aC03LjQ4VjU1LjRIMTQ0YzIuNDcsMCw0LjU2LTEuNTksNC41Ni00LjEyUzE0Ni40Miw0Ny4xNSwxNDQsNDcuMTVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTcxLjc4LDYxLjA2LDE1Ny44NywzOS4xOGgxMC42N2w4LDEzLjUzLDcuODYtMTMuNTNIMTk1LjFMMTgxLjI0LDYxLjA2djE0LjhoLTkuNDZaIi8+PGcgaWQ9IkNpcmNsZV9CZWFyZCIgZGF0YS1uYW1lPSJDaXJjbGUgQmVhcmQiPjxwYXRoIGlkPSJfUGF0aF8iIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBjbGFzcz0iY2xzLTEiIGQ9Ik0yNjUsNzEuNzlsLTUuNy0zLjM1Yy0uNzcsOS4zOS0xNC4zNywxNS44MS0xOS4wOCwxMS4wOS0yLjUxLTIuNTEsMC03LjQsMC03LjRIMjI2LjhzMi4zNiw1LDAsNy40Yy00LjcxLDQuNzItMTguMzEtMS43LTE5LjA5LTExLjA5TDIwMiw3MS43OXMtLjA3LDE3LjU4LDMuMzUsMjQuNDVjMy43LDcuNDEsMTQuMjksMTMuMzksMjguMTMsMTMuMzlzMjQuNDMtNiwyOC4xMy0xMy4zOUMyNjUuMDUsODkuMzcsMjY1LDcxLjc5LDI2NSw3MS43OVoiLz48cGF0aCBpZD0iX1BhdGhfMiIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGNsYXNzPSJjbHMtMSIgZD0iTTI0My41NSw0M2MtNC41NiwwLTYuNjksMi0xMC4xLDJzLTUuNDQtMi0xMC0yYy0zLjA2LDAtMjIuMTkuNzctMjEuNDMsMjguOGw1LjY5LTMuMzVzLTIuMTEtMTMuMzksMTIuNC0xMy4zOWM3LjcsMCw4LjYzLTIsMTMuMzktMnM1LjY5LDIsMTMuMzksMmMxNC41MSwwLDEyLjQsMTMuMzksMTIuNCwxMy4zOUwyNjUsNzEuNzlDMjY1Ljc0LDQzLjc2LDI0Ni42MSw0MywyNDMuNTUsNDNaIi8+PC9nPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI5MS43MywzNy41N2MxMS4yMiwwLDE5LjU4LDcuODEsMTkuNTgsMTlzLTguMzYsMTktMTkuNTgsMTktMTkuNjMtNy44MS0xOS42My0xOVMyODAuNTEsMzcuNTcsMjkxLjczLDM3LjU3Wm0wLDguMzZjLTYuMSwwLTEwLDQuNjItMTAsMTAuNjJzMy45MSwxMC42MSwxMCwxMC42MSwxMC00LjY4LDEwLTEwLjYxUzI5Ny43OCw0NS45MywyOTEuNzMsNDUuOTNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzE3LjkxLDYyLjU5YTE2LjU4LDE2LjU4LDAsMCwwLDExLjcyLDQuODRjMy4yNCwwLDUuMjItMS4zNyw1LjIyLTMuMTMsMC0yLjA5LTIuMzYtMi45Mi02LjI3LTMuNzQtNi4wNS0xLjIxLTE0LjUyLTIuNzUtMTQuNTItMTEuNDQsMC02LjE2LDUuMjMtMTEuNDksMTQuNjMtMTEuNDlhMjIuMzcsMjIuMzcsMCwwLDEsMTQuOSw1LjExbC01LjE2LDYuNzdhMTcuMDYsMTcuMDYsMCwwLDAtMTAuMzQtMy44Yy0zLjE0LDAtNC4zNSwxLjI3LTQuMzUsMi44NiwwLDEuOTMsMi4yNiwyLjU5LDYuMzMsMy4zNiw2LjA1LDEuMjYsMTQuNCwzLDE0LjQsMTEuMzIsMCw3LjM3LTUuNDQsMTIuMjctMTUuMjgsMTIuMjctNy40MywwLTEyLjYtMi4zMS0xNi4yOC01LjgzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM0OC4zMywzOC4xOGgyMC43OGM3LjI2LDAsMTAuNzMsNC43MywxMC43Myw5LjM1cy0yLjgxLDcuNjQtNi4yNyw4LjQxYzMuOS42MSw3LDQuMzQsNyw5LDAsNS4zNC0zLjU3LDEwLTEwLjc4LDEwSDM0OC4zM1pNMzY3LDUyLjM3YTMuMTEsMy4xMSwwLDAsMCwzLjI0LTMuMTlBMy4wNiwzLjA2LDAsMCwwLDM2Nyw0NmgtOS4xOHY2LjMzWk0zNjcuMyw2N2MyLjI1LDAsMy42My0xLjM3LDMuNjMtMy4zNWEzLjQsMy40LDAsMCwwLTMuNjMtMy40N2gtOS41MVY2N1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00MDIuOTQsMzcuNTdjMTEuMjIsMCwxOS41OCw3LjgxLDE5LjU4LDE5cy04LjM2LDE5LTE5LjU4LDE5LTE5LjYzLTcuODEtMTkuNjMtMTlTMzkxLjcyLDM3LjU3LDQwMi45NCwzNy41N1ptMCw4LjM2Yy02LjEsMC0xMCw0LjYyLTEwLDEwLjYyczMuOTEsMTAuNjEsMTAsMTAuNjEsOS45NS00LjY4LDkuOTUtMTAuNjFTNDA5LDQ1LjkzLDQwMi45NCw0NS45M1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00NDEuMDUsNjIuNDNoLTQuODRWNzQuODZoLTkuNDVWMzguMThoMTguMzZjOC4xNCwwLDEyLjc2LDUuMzksMTIuNzYsMTIuMjEsMCw2LjM4LTMuOSw5Ljc4LTcuMzEsMTFsNy40OCwxMy40OEg0NDcuMjFabTIuNjQtMTYuMjhoLTcuNDhWNTQuNGg3LjQ4YzIuNDgsMCw0LjU3LTEuNTksNC41Ny00LjEyUzQ0Ni4xNyw0Ni4xNSw0NDMuNjksNDYuMTVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDcyLDUyLjdWNzQuODZoLTkuNDZWMzguMThoOS43M2wxNC44NSwyMS4xMVYzOC4xOGg5LjUyVjc0Ljg2aC05LjEzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTUwMi43MSwzOC4xOEg1MjkuNnY4SDUxMi4xN3Y2LjExaDE3LjA1djhINTEyLjE3djYuNkg1MjkuNnY4SDUwMi43MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yODMuNzQsOS42N2wtMTIuMjYtLjc4cy0xMC44NS0uMjYtMTYuMy4yM2MwLDAtOS4yNC45LTExLjU5LDEuMTlhMzcsMzcsMCwwLDEtNS4xLjUybC00LjA3LjA4LTQuMDYtLjA4YTM3LDM3LDAsMCwxLTUuMS0uNTJjLTIuMzUtLjI5LTExLjU3LTEuMTktMTEuNTctMS4xOS01LjQ1LS40OS0xNi4yOC0uMjMtMTYuMjgtLjIzbC0xMi4yNS43OGMtMS4yOC4xMy0xLjI2LjY5LTEuMjYuNjl2NS43OWwuMTEuMTcuNDMuMzQsMS4xOSwxLjIzYy43Ny42NywxLjI3LDMuNSwxLjI3LDMuNWwxLjMsNS45MmMuODYsMy4zLDEuNjYsNC4yNCwxLjY2LDQuMjRhNS4yOCw1LjI4LDAsMCwwLDMuMTksMS45NGM2LjM5LDEuODcsMTUuNzQsMS42NCwxNS43NCwxLjY0YTYwLjY4LDYwLjY4LDAsMCwwLDEzLjE0LTEuMjksNS42MSw1LjYxLDAsMCwwLDMuMzUtMi42Yy4zMS0uNDUsMi0zLjY0LDItMy42NCwxLjI5LTIuNywzLjA4LTguMTIsMy4wOC04LjEyYTUuMTcsNS4xNywwLDAsMSwuODMtMS40NGMuNTgtLjksMy4yMy0uOCwzLjIzLS44czIuNjYtLjEsMy4yNC44YTUuMTcsNS4xNywwLDAsMSwuODMsMS40NHMxLjc4LDUuNDIsMy4wOCw4LjEyYzAsMCwxLjY5LDMuMTksMiwzLjY0YTUuNjEsNS42MSwwLDAsMCwzLjM2LDIuNiw2MC43Miw2MC43MiwwLDAsMCwxMy4xNSwxLjI5czkuMzYuMjMsMTUuNzUtMS42NGE1LjMsNS4zLDAsMCwwLDMuMi0xLjk0cy44MS0uOTQsMS42Ni00LjI0TDI4MiwyMS4zOXMuNDktMi44MywxLjI3LTMuNWwxLjE5LTEuMjMuNDMtLjM0LjExLS4xN1YxMC4zNlMyODUsOS44LDI4My43NCw5LjY3Wm0tNTUuOSw4LjYxYy0uMzQsMy0yLjY4LDkuNTUtMi42OCw5LjU1YTEyLjY2LDEyLjY2LDAsMCwxLTIsMy40OCw4LjEyLDguMTIsMCwwLDEtMi43MSwxLjVjLTcuNzQsMS44NC0xOC41Mi45Mi0xOC41Mi45MmEzOS4xNiwzOS4xNiwwLDAsMS03LjQyLTEuMTgsNi42OSw2LjY5LDAsMCwxLTIuOS0xLjExLDQuNyw0LjcsMCwwLDEtMS0xLjUyYy0uNzItMS4zMS0xLjU3LTYuMDUtMS41Ny02LjA1YTg4LjI2LDg4LjI2LDAsMCwxLS42NS05LjE5LDIuMjcsMi4yNywwLDAsMSwuMzgtMS41LDMuMzMsMy4zMywwLDAsMSwyLjMxLTEuNDVjMTQuODMtMy4yNywzMi4wNS4zOSwzMi4wNS4zOUMyMjYuMzgsMTIuNzUsMjI3LDE0LDIyNywxNCwyMjguMzMsMTUuMzIsMjI3Ljg0LDE4LjI4LDIyNy44NCwxOC4yOFptNTIsNS41OXMtLjg1LDQuNzQtMS41Nyw2LjA1YTQuNyw0LjcsMCwwLDEtMSwxLjUyLDYuNyw2LjcsMCwwLDEtMi45MSwxLjExLDM5LjE2LDM5LjE2LDAsMCwxLTcuNDIsMS4xOHMtMTAuOC45Mi0xOC41NS0uOTJhOC4yMiw4LjIyLDAsMCwxLTIuNzEtMS41LDEyLjY2LDEyLjY2LDAsMCwxLTItMy40OHMtMi4zNC02LjU0LTIuNjktOS41NWMwLDAtLjQ4LTMsLjgzLTQuMzIsMCwwLC42NC0xLjIxLDMuODQtMS44NCwwLDAsMTcuMjQtMy42NiwzMi4wOS0uMzlhMy4zNiwzLjM2LDAsMCwxLDIuMzIsMS40NSwyLjMxLDIuMzEsMCwwLDEsLjM3LDEuNUE4NS40OSw4NS40OSwwLDAsMSwyNzkuOCwyMy44N1oiLz48L3N2Zz4='

const blackLogo = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MzMgMTE0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzIzMWYyMDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmxvZ29fYmxhY2s8L3RpdGxlPjxwYXRoIGQ9Ik0yOS42Niw2MS4xMkgxNC40M1Y3NS44Nkg1VjM5LjE4aDkuNDZWNTIuODdIMjkuNjZWMzkuMThoOS40NlY3NS44NkgyOS42NloiLz48cGF0aCBkPSJNNDUuMTcsMzkuMThoOS40NlY3NS44Nkg0NS4xN1oiLz48cGF0aCBkPSJNNjAuNjgsMzkuMThoOS40NlY2Ny42MUg4NC44OHY4LjI1SDYwLjY4WiIvPjxwYXRoIGQ9Ik0xMTIuNzEsNzAuM0g5Ny40OGwtMS44Nyw1LjU2SDg1LjMyTDk5LjEzLDM5LjE4SDExMWwxMy44NSwzNi42OEgxMTQuNThabS0xMi43Ni04aDEwLjI5bC01LjE3LTE0LjlaIi8+PHBhdGggZD0iTTE0MS4zMSw2My40M2gtNC44NFY3NS44NkgxMjdWMzkuMThoMTguMzdjOC4xNCwwLDEyLjc2LDUuMzksMTIuNzYsMTIuMjEsMCw2LjM4LTMuOTEsOS43OC03LjMyLDExbDcuNDgsMTMuNDhIMTQ3LjQ3Wk0xNDQsNDcuMTVoLTcuNDhWNTUuNEgxNDRjMi40NywwLDQuNTYtMS41OSw0LjU2LTQuMTJTMTQ2LjQyLDQ3LjE1LDE0NCw0Ny4xNVoiLz48cGF0aCBkPSJNMTcxLjc4LDYxLjA2LDE1Ny44NywzOS4xOGgxMC42N2w4LDEzLjUzLDcuODYtMTMuNTNIMTk1LjFMMTgxLjI0LDYxLjA2djE0LjhoLTkuNDZaIi8+PGcgaWQ9IkNpcmNsZV9CZWFyZCIgZGF0YS1uYW1lPSJDaXJjbGUgQmVhcmQiPjxwYXRoIGlkPSJfUGF0aF8iIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBkPSJNMjY1LDcxLjc5bC01LjctMy4zNWMtLjc3LDkuMzktMTQuMzcsMTUuODEtMTkuMDgsMTEuMDktMi41MS0yLjUxLDAtNy40LDAtNy40SDIyNi44czIuMzYsNSwwLDcuNGMtNC43MSw0LjcyLTE4LjMxLTEuNy0xOS4wOS0xMS4wOUwyMDIsNzEuNzlzLS4wNywxNy41OCwzLjM1LDI0LjQ1YzMuNyw3LjQxLDE0LjI5LDEzLjM5LDI4LjEzLDEzLjM5czI0LjQzLTYsMjguMTMtMTMuMzlDMjY1LjA1LDg5LjM3LDI2NSw3MS43OSwyNjUsNzEuNzlaIi8+PHBhdGggaWQ9Il9QYXRoXzIiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBkPSJNMjQzLjU1LDQzYy00LjU2LDAtNi42OSwyLTEwLjEsMnMtNS40NC0yLTEwLTJjLTMuMDYsMC0yMi4xOS43Ny0yMS40MywyOC44bDUuNjktMy4zNXMtMi4xMS0xMy4zOSwxMi40LTEzLjM5YzcuNywwLDguNjMtMiwxMy4zOS0yczUuNjksMiwxMy4zOSwyYzE0LjUxLDAsMTIuNCwxMy4zOSwxMi40LDEzLjM5TDI2NSw3MS43OUMyNjUuNzQsNDMuNzYsMjQ2LjYxLDQzLDI0My41NSw0M1oiLz48L2c+PHBhdGggZD0iTTI5MS43MywzNy41N2MxMS4yMiwwLDE5LjU4LDcuODEsMTkuNTgsMTlzLTguMzYsMTktMTkuNTgsMTktMTkuNjMtNy44MS0xOS42My0xOVMyODAuNTEsMzcuNTcsMjkxLjczLDM3LjU3Wm0wLDguMzZjLTYuMSwwLTEwLDQuNjItMTAsMTAuNjJzMy45MSwxMC42MSwxMCwxMC42MSwxMC00LjY4LDEwLTEwLjYxUzI5Ny43OCw0NS45MywyOTEuNzMsNDUuOTNaIi8+PHBhdGggZD0iTTMxNy45MSw2Mi41OWExNi41OCwxNi41OCwwLDAsMCwxMS43Miw0Ljg0YzMuMjQsMCw1LjIyLTEuMzcsNS4yMi0zLjEzLDAtMi4wOS0yLjM2LTIuOTItNi4yNy0zLjc0LTYuMDUtMS4yMS0xNC41Mi0yLjc1LTE0LjUyLTExLjQ0LDAtNi4xNiw1LjIzLTExLjQ5LDE0LjYzLTExLjQ5YTIyLjM3LDIyLjM3LDAsMCwxLDE0LjksNS4xMWwtNS4xNiw2Ljc3YTE3LjA2LDE3LjA2LDAsMCwwLTEwLjM0LTMuOGMtMy4xNCwwLTQuMzUsMS4yNy00LjM1LDIuODYsMCwxLjkzLDIuMjYsMi41OSw2LjMzLDMuMzYsNi4wNSwxLjI2LDE0LjQsMywxNC40LDExLjMyLDAsNy4zNy01LjQ0LDEyLjI3LTE1LjI4LDEyLjI3LTcuNDMsMC0xMi42LTIuMzEtMTYuMjgtNS44M1oiLz48cGF0aCBkPSJNMzQ4LjMzLDM4LjE4aDIwLjc4YzcuMjYsMCwxMC43Myw0LjczLDEwLjczLDkuMzVzLTIuODEsNy42NC02LjI3LDguNDFjMy45LjYxLDcsNC4zNCw3LDksMCw1LjM0LTMuNTcsMTAtMTAuNzgsMTBIMzQ4LjMzWk0zNjcsNTIuMzdhMy4xMSwzLjExLDAsMCwwLDMuMjQtMy4xOUEzLjA2LDMuMDYsMCwwLDAsMzY3LDQ2aC05LjE4djYuMzNaTTM2Ny4zLDY3YzIuMjUsMCwzLjYzLTEuMzcsMy42My0zLjM1YTMuNCwzLjQsMCwwLDAtMy42My0zLjQ3aC05LjUxVjY3WiIvPjxwYXRoIGQ9Ik00MDIuOTQsMzcuNTdjMTEuMjIsMCwxOS41OCw3LjgxLDE5LjU4LDE5cy04LjM2LDE5LTE5LjU4LDE5LTE5LjYzLTcuODEtMTkuNjMtMTlTMzkxLjcyLDM3LjU3LDQwMi45NCwzNy41N1ptMCw4LjM2Yy02LjEsMC0xMCw0LjYyLTEwLDEwLjYyczMuOTEsMTAuNjEsMTAsMTAuNjEsOS45NS00LjY4LDkuOTUtMTAuNjFTNDA5LDQ1LjkzLDQwMi45NCw0NS45M1oiLz48cGF0aCBkPSJNNDQxLjA1LDYyLjQzaC00Ljg0Vjc0Ljg2aC05LjQ1VjM4LjE4aDE4LjM2YzguMTQsMCwxMi43Niw1LjM5LDEyLjc2LDEyLjIxLDAsNi4zOC0zLjksOS43OC03LjMxLDExbDcuNDgsMTMuNDhINDQ3LjIxWm0yLjY0LTE2LjI4aC03LjQ4VjU0LjRoNy40OGMyLjQ4LDAsNC41Ny0xLjU5LDQuNTctNC4xMlM0NDYuMTcsNDYuMTUsNDQzLjY5LDQ2LjE1WiIvPjxwYXRoIGQ9Ik00NzIsNTIuN1Y3NC44NmgtOS40NlYzOC4xOGg5LjczbDE0Ljg1LDIxLjExVjM4LjE4aDkuNTJWNzQuODZoLTkuMTNaIi8+PHBhdGggZD0iTTUwMi43MSwzOC4xOEg1MjkuNnY4SDUxMi4xN3Y2LjExaDE3LjA1djhINTEyLjE3djYuNkg1MjkuNnY4SDUwMi43MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yODMuNzQsOS42N2wtMTIuMjYtLjc4cy0xMC44NS0uMjYtMTYuMy4yM2MwLDAtOS4yNC45LTExLjU5LDEuMTlhMzcsMzcsMCwwLDEtNS4xLjUybC00LjA3LjA4LTQuMDYtLjA4YTM3LDM3LDAsMCwxLTUuMS0uNTJjLTIuMzUtLjI5LTExLjU3LTEuMTktMTEuNTctMS4xOS01LjQ1LS40OS0xNi4yOC0uMjMtMTYuMjgtLjIzbC0xMi4yNS43OGMtMS4yOC4xMy0xLjI2LjY5LTEuMjYuNjl2NS43OWwuMTEuMTcuNDMuMzQsMS4xOSwxLjIzYy43Ny42NywxLjI3LDMuNSwxLjI3LDMuNWwxLjMsNS45MmMuODYsMy4zLDEuNjYsNC4yNCwxLjY2LDQuMjRhNS4yOCw1LjI4LDAsMCwwLDMuMTksMS45NGM2LjM5LDEuODcsMTUuNzQsMS42NCwxNS43NCwxLjY0YTYwLjY4LDYwLjY4LDAsMCwwLDEzLjE0LTEuMjksNS42MSw1LjYxLDAsMCwwLDMuMzUtMi42Yy4zMS0uNDUsMi0zLjY0LDItMy42NCwxLjI5LTIuNywzLjA4LTguMTIsMy4wOC04LjEyYTUuMTcsNS4xNywwLDAsMSwuODMtMS40NGMuNTgtLjksMy4yMy0uOCwzLjIzLS44czIuNjYtLjEsMy4yNC44YTUuMTcsNS4xNywwLDAsMSwuODMsMS40NHMxLjc4LDUuNDIsMy4wOCw4LjEyYzAsMCwxLjY5LDMuMTksMiwzLjY0YTUuNjEsNS42MSwwLDAsMCwzLjM2LDIuNiw2MC43Miw2MC43MiwwLDAsMCwxMy4xNSwxLjI5czkuMzYuMjMsMTUuNzUtMS42NGE1LjMsNS4zLDAsMCwwLDMuMi0xLjk0cy44MS0uOTQsMS42Ni00LjI0TDI4MiwyMS4zOXMuNDktMi44MywxLjI3LTMuNWwxLjE5LTEuMjMuNDMtLjM0LjExLS4xN1YxMC4zNlMyODUsOS44LDI4My43NCw5LjY3Wm0tNTUuOSw4LjYxYy0uMzQsMy0yLjY4LDkuNTUtMi42OCw5LjU1YTEyLjY2LDEyLjY2LDAsMCwxLTIsMy40OCw4LjEyLDguMTIsMCwwLDEtMi43MSwxLjVjLTcuNzQsMS44NC0xOC41Mi45Mi0xOC41Mi45MmEzOS4xNiwzOS4xNiwwLDAsMS03LjQyLTEuMTgsNi42OSw2LjY5LDAsMCwxLTIuOS0xLjExLDQuNyw0LjcsMCwwLDEtMS0xLjUyYy0uNzItMS4zMS0xLjU3LTYuMDUtMS41Ny02LjA1YTg4LjI2LDg4LjI2LDAsMCwxLS42NS05LjE5LDIuMjcsMi4yNywwLDAsMSwuMzgtMS41LDMuMzMsMy4zMywwLDAsMSwyLjMxLTEuNDVjMTQuODMtMy4yNywzMi4wNS4zOSwzMi4wNS4zOUMyMjYuMzgsMTIuNzUsMjI3LDE0LDIyNywxNCwyMjguMzMsMTUuMzIsMjI3Ljg0LDE4LjI4LDIyNy44NCwxOC4yOFptNTIsNS41OXMtLjg1LDQuNzQtMS41Nyw2LjA1YTQuNyw0LjcsMCwwLDEtMSwxLjUyLDYuNyw2LjcsMCwwLDEtMi45MSwxLjExLDM5LjE2LDM5LjE2LDAsMCwxLTcuNDIsMS4xOHMtMTAuOC45Mi0xOC41NS0uOTJhOC4yMiw4LjIyLDAsMCwxLTIuNzEtMS41LDEyLjY2LDEyLjY2LDAsMCwxLTItMy40OHMtMi4zNC02LjU0LTIuNjktOS41NWMwLDAtLjQ4LTMsLjgzLTQuMzIsMCwwLC42NC0xLjIxLDMuODQtMS44NCwwLDAsMTcuMjQtMy42NiwzMi4wOS0uMzlhMy4zNiwzLjM2LDAsMCwxLDIuMzIsMS40NSwyLjMxLDIuMzEsMCwwLDEsLjM3LDEuNUE4NS40OSw4NS40OSwwLDAsMSwyNzkuOCwyMy44N1oiLz48L3N2Zz4='

const styling = {
  sizes: {
    sm: {
      maxWidth: '3rem'
    },
    md: {
      maxWidth: '10rem',
      ...mediaQueryBelow('md', {
        maxWidth: '14rem'
      })
    },
    lg: {
      maxWidth: '12rem'
    }
  }
}

@withRouter
@radium
export class Logo extends React.Component {
  static propTypes = {
    type: PropType.string,
    history: PropType.object,
    size: PropType.string,
    style: PropType.object,
    className: PropType.string
  }

  static defaultProps = {
    type: 'white',
    size: 'md',
    style: {},
    className: ''
  }

  constructor (props) {
    super(props)
    this.doClickAction = this.doClickAction.bind(this)
  }

  getSrc () {
    switch (this.props.type) {
      case 'white': { return whiteLogo }
      case 'black': { return blackLogo }
      default : { return whiteLogo }
    }
  }

  getSize () {
    return styling.sizes[this.props.size]
  }

  doClickAction () {
    this.props.history.push('/')
  }

  render () {
    return (<img src={this.getSrc()} onClick={this.doClickAction} style={{...this.props.style, ...this.getSize()}} className={classnames(this.props.className)} />)
  }
}
