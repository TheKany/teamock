# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<!-- 코드 저장 -->
<div
              className={`info__teamList-item ${
                openProfile === el.id ? "open" : null
              }`}
            >
              <button
                className={`info__item-btn ${
                  openProfile === el.id ? "open" : null
                }`}
                key={`${el.id}_${el.name}`}
                onClick={() => onClickProfile(el.id)}
              >
                {openProfile !== el.id ? (
                  // 간략 정보
                  <>
                    {/* 프로필 사진 */}
                    <div className="info__item photo"></div>

                    {/* 기본 정보 */}
                    <div className="info__item subInfo">
                      <p className="info__subInfo-text number">#{el.id}</p>
                      <p className="info__subInfo-text position">
                        {el.position}
                      </p>
                      <p className="info__subInfo-text name">{el.name}</p>
                    </div>

                    {/* 별명 */}
                    <p className="info__item nickname">{el.nickname}</p>

                    {/* 승률 */}
                    <p className="info__item winRate">{el.winRate}%</p>

                    {/* 출석율 */}
                    <p className="info__item AttRate">{el.attRate}%</p>

                    {/* 플레이스타일 */}
                    <p className="info__item style">{el.style}</p>
                  </>
                ) : (
                  // 상세 정보
                  <div
                    className={`info__detail-item ${
                      openProfile === el.id ? "open" : null
                    }`}
                  >
                    <div className="info__detail-img">
                      <img src={`/img/${el.imgSrc}`} alt={`${el.name} 사진`} />
                    </div>
                    <div className="info__detail-contents"></div>
                  </div>
                )}
              </button>
            </div>

            ```
            적용할 대상에 다음과 같이 CSS를 작성합니다.

min-height: 100vh;
min-height: -webkit-fill-available; 
혹은 아래와 같이 적용해봅니다.

height: 100vh;
height: -webkit-fill-available;
height: fill-available;
            ```
