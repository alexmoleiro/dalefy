```
test('should render two ProductLines', () => {
    const mainComponent = shallow(<Provider><App/></Provider>);
   expect(mainComponent.find('div.container').children()).toHaveLength(2);
   //expect(mainComponent.find('div.container').children().reduce((value, node) => value && node.name() === 'ProductLine', true)).toBeTruthy();
})
```