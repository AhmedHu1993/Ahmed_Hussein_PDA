require('minitest/autorun')
require('minitest/rg')
require_relative("../card_game")
require_relative("../card")

class CardGameTest < Minitest::Test

    def setup
        @card1 = Card.new('spade', 5)
        @card2 = Card.new('hearts', 8)
        @cards = [@card1, @card2]
        @card_game1 = CardGame.new(@cards)
    end

    def test_check_for_ace
        assert_equal(false, @card_game1.checkforAce(@card1))
    end

    def test_returning_highest_card
      assert_equal(@card2 , @card_game1.highest_card(@card1, @card2))
    end

    def test_return_total_cards_values
      assert_equal("You have a total of 13" , @card_game1.cards_total(@cards))
    end
end
