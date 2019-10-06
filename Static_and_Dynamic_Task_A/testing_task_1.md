# Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
# ruby

class CardGame

  # here there should be def initialize method to state the attributes
  # also the attributes should be stated to be reader or writer
  def checkforAce(card)
    if card.value = 1
      #in comparing statements it should be double equal
      return true
    else
      return false
    end
  end
  #nothing here called (dif) it should be (def)
  # also missing comma between the two arguments passing to the method
  dif highest_card(card1 card2)
  if card1.value > card2.value
  # also inside this method there is no card object whether card1 or card2
    return card
  else
    return card2
  end
end
  # there is extra end after the method
end
#this method should be inside the class
def self.cards_total(cards)
  # the total should have initial value of zero
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
    # the return statement should be out of the for loop
    # string interpolation in curly brackets because total is integer value
  end
end
# ```
