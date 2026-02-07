using FluentAssertions;
using NUnit.Framework;

namespace MetroStationNavigatorTask 
{
    public class MetroStationNavigatorTestsTask
    {
        private IMetroStationNavigator _navigator;
        public virtual IMetroStationNavigator CreateNavigator() => new MetroStationNavigator(); // это удалять нельзя

        [TestCase("1", "1", "1", "return", TestName = "Минимальные значение параметров")]
        public void TestPath(string hullIntegrity, string shieldCharge, string reactorStability, string result)
        {
            _navigator = CreateNavigator();
            result.Should().BeEquivalentTo(_navigator.GetPath(hullIntegrity, shieldCharge, reactorStability));
        }
    }
}
