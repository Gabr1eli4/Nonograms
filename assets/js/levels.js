const playblock = `<td>
	<table>
		<tr>${'<td class="playblock block"></td>'.repeat(10)}</tr>
		<tr>${'<td class="playblock block"></td>'.repeat(10)}</tr>
		<tr>${'<td class="playblock block"></td>'.repeat(10)}</tr>
		<tr>${'<td class="playblock block"></td>'.repeat(10)}</tr>
		<tr>${'<td class="playblock block"></td>'.repeat(10)}</tr>
		<tr>${'<td class="playblock block"></td>'.repeat(10)}</tr>
		<tr>${'<td class="playblock block"></td>'.repeat(10)}</tr>
		<tr>${'<td class="playblock block"></td>'.repeat(10)}</tr>
		<tr>${'<td class="playblock block"></td>'.repeat(10)}</tr>
		<tr>${'<td class="playblock block"></td>'.repeat(10)}</tr>
	</table>
</td>`;

const first_level = `<div class='level' id='1'>
	<table>
		<tr>
			<td></td>
			<td>
				<table>

					<tr>
						<td class="block"></td>
						<td class="block">1</td>
						${'<td class="block"></td>'.repeat(8)}
					</tr>
					<tr>
						<td class="block"></td>
						<td class="block">2</td>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">4</td>
						<td class="block">1</td>
						${'<td class="block"></td>'.repeat(4)}
					</tr>
					<tr>
						<td class="block">1</td>
						<td class="block">2</td>
						<td class="block"></td>
						<td class="block">1</td>
						<td class="block">3</td>
						<td class="block">2</td>
						<td class="block">2</td>
						<td class="block">1</td>
						${'<td class="block"></td>'.repeat(2)}
					</tr>
					<tr>
						<td class="block">2</td>
						<td class="block">1</td>
						<td class="block">9</td>
						<td class="block">5</td>
						<td class="block">1</td>
						<td class="block">5</td>
						<td class="block">4</td>
						<td class="block">3</td>
						<td class="block">1</td>
						<td class="block">2</td>
					</tr>
				</table>
			</td>
		</tr>

		<tr>
			<td>
				<table>
					<tr>${'<td class="block">2</td>'.repeat(2)}</tr>
					<tr>
						<td class="block"></td>
						<td class="block">3</td>
					</tr>
					<tr>
						<td class="block">2</td>
						<td class="block">4</td>
					</tr>
					<tr>
						<td class="block"></td>
						<td class="block">6</td>
					</tr>
					<tr>
						<td class="block"></td>
						<td class="block">2</td>
					</tr>
					<tr>
						<td class="block">5</td>
						<td class="block">1</td>
					</tr>
					<tr>
						<td class="block">8</td>
						<td class="block">1</td>
					</tr>
					<tr>
						<td class="block">1</td>
						<td class="block">7</td>
					</tr>
					<tr>
						<td class="block">1</td>
						<td class="block">3</td>
					</tr>
					<tr>
						<td class="block">2</td>
						<td class="block">3</td>
					</tr>
				</table>
			</td>
			${playblock}
		</tr>
	</table>
</div>
`;

const second_level = `<div class='level' id='2'>
	<table>
		<tr>
			<td></td>
			<td>
				<table>
					<tr>
						${'<td class="block"></td>'.repeat(3)}
						<td class="block">2</td>
						${'<td class="block"></td>'.repeat(6)}
					</tr>
					<tr>
						<td class="block"></td>
						<td class="block">1</td>
						<td class="block"></td>
						<td class="block">2</td>
						<td class="block">4</td>
						<td class="block">5</td>
						<td class="block">3</td>
						<td class="block"></td>
						<td class="block">1</td>
						<td class="block"></td>
					</tr>
					<tr>
						<td class="block">3</td>
						<td class="block">4</td>
						<td class="block">6</td>
						<td class="block">1</td>
						<td class="block">2</td>
						<td class="block">1</td>
						<td class="block">2</td>
						<td class="block">6</td>
						<td class="block">4</td>
						<td class="block">3</td>
					</tr>
					<tr>
						<td class="block">5</td>
						<td class="block">2</td>
						${'<td class="block">1</td>'.repeat(6)}
						<td class="block">2</td>
						<td class="block">5</td>
					</tr>
				</table>
			</td>
		</tr>

		<tr>
			<td>
				<table>
					<tr>
						<td class="block"></td>
						<td class="block">3</td>
						<td class="block">4</td>
					</tr>
					<tr>
						<td class="block">1</td>
						<td class="block">6</td>
						<td class="block">1</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">10</td>
					</tr>
					<tr>
						<td class="block">2</td>
						<td class="block">2</td>
						<td class="block">2</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">10</td>
					</tr>
					<tr>
						<td class="block"></td>
						<td class="block">4</td>
						<td class="block">5</td>
					</tr>
					<tr>
					${'<td class="block">1</td>'.repeat(3)}
					</tr>
					<tr>
						<td class="block">1</td>
						<td class="block">3</td>
						<td class="block">1</td>
					</tr>
					<tr>
						<td class="block"></td>
						${'<td class="block">2</td>'.repeat(2)}
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">8</td>
					</tr>
				</table>
			</td>
			${playblock}
		</tr>
	</table>
</div>`;

const third_level = `<div class='level' id='3'>
	<table>
		<tr>
			<td></td>
			<td>
				<table>
					<tr>
						${'<td class="block"></td>'.repeat(3)}
						<td class="block">2</td>
						${'<td class="block"></td>'.repeat(6)}
					</tr>
					<tr>
						<td class="block"></td>
						<td class="block">2</td>
						<td class="block">2</td>
						<td class="block">2</td>
						<td class="block"></td>
						<td class="block">1</td>
						<td class="block"></td>
						<td class="block">1</td>
						<td class="block">2</td>
						<td class="block"></td>
					</tr>
					<tr>
						<td class="block"></td>
						<td class="block">1</td>
						<td class="block">3</td>
						<td class="block">2</td>
						<td class="block"></td>
						<td class="block">1</td>
						<td class="block">4</td>
						<td class="block">4</td>
						<td class="block">1</td>
						<td class="block">3</td>
					</tr>
					<tr>
						<td class="block">3</td>
						<td class="block">2</td>
						<td class="block">1</td>
						<td class="block">4</td>
						<td class="block">6</td>
						<td class="block">2</td>
						<td class="block">3</td>
						<td class="block">1</td>
						<td class="block">2</td>
						<td class="block">3</td>
					</tr>
				</table>
			</td>
		</tr>

		<tr>
			<td>
				<table>
					<tr>
						<td class="block"></td>
						<td class="block">1</td>
						<td class="block">1</td>
					</tr>
					<tr>
						<td class="block"></td>
						<td class="block">3</td>
						<td class="block">3</td>
					</tr>
					<tr>
						${'<td class="block">1</td>'.repeat(2)}
						<td class="block">2</td>
					</tr>
					<tr>
						<td class="block"></td>
						<td class="block">4</td>
						<td class="block">1</td>
					</tr>
					<tr>
						<td class="block"></td>
						<td class="block">3</td>
						<td class="block">4</td>
					</tr>
					<tr>
						<td class="block">1</td>
						<td class="block">2</td>
						<td class="block">1</td>
					</tr>
					<tr>
						<td class="block"></td>
						<td class="block">5</td>
						<td class="block">2</td>
					</tr>
					<tr>
						<td class="block">1</td>
						<td class="block">5</td>
						<td class="block">1</td>
					</tr>
					<tr>
						<td class="block">2</td>
						<td class="block">4</td>
						<td class="block">2</td>
					</tr>
					<tr>
						<td class="block"></td>
						<td class="block">3</td>
						<td class="block">3</td>
					</tr>
				</table>
			</td>
			${playblock}
		</tr>
	</table>
</div>`;

const fourth_level = `<div class='level' id='4'>
	<table>
		<tr>
			<td></td>
			<td>
				<table>
					<tr>
						${'<td class="block"></td>'.repeat(8)}
						<td class="block">2</td>
						<td class="block"></td>
					</tr>
					<tr>
						<td class="block">2</td>
						<td class="block">4</td>
						<td class="block"></td>
						<td class="block">3</td>
						${'<td class="block">2</td>'.repeat(5)}
						<td class="block">3</td>
					</tr>
					<tr>
						<td class="block">1</td>
						<td class="block">3</td>
						<td class="block">3</td>
						<td class="block">5</td>
						<td class="block">6</td>
						<td class="block">6</td>
						<td class="block">7</td>
						<td class="block">6</td>
						<td class="block">2</td>
						<td class="block">5</td>
					</tr>
				</table>
			</td>
		</tr>

		<tr>
			<td>
				<table>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">2</td>
						<td class="block">5</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">2</td>
						<td class="block">7</td>
					</tr>
					<tr>
						<td class="block"></td>
						${'<td class="block">1</td>'.repeat(3)}
					</tr>
					<tr>
					${'<td class="block">1</td>'.repeat(4)}
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(3)}
						<td class="block">5</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">2</td>
						<td class="block">7</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">7</td>
						<td class="block">1</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">7</td>
						<td class="block">1</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(3)}
						<td class="block">8</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(3)}
						<td class="block">7</td>
					</tr>
				</table>
			</td>
			${playblock}
		</tr>
	</table>
</div>`;

const fifth_level = `<div class='level' id='5'>
	<table>
		<tr>
			<td></td>
			<td>
				<table>
					<tr>
						<td class="block">4</td>
						<td class="block">4</td>
						<td class="block"></td>
						<td class="block">1</td>
						<td class="block"></td>
						<td class="block"></td>
						<td class="block">1</td>
						<td class="block"></td>
						<td class="block">4</td>
						<td class="block">4</td>
					</tr>
					<tr>
						<td class="block">1</td>
						<td class="block">1</td>
						<td class="block">3</td>
						<td class="block">2</td>
						<td class="block">4</td>
						<td class="block">4</td>
						<td class="block">2</td>
						<td class="block">3</td>
						<td class="block">1</td>
						<td class="block">1</td>
					</tr>
					<tr>
						<td class="block">1</td>
						<td class="block">1</td>
						<td class="block">6</td>
						<td class="block">2</td>
						<td class="block">1</td>
						<td class="block">1</td>
						<td class="block">2</td>
						<td class="block">6</td>
						<td class="block">1</td>
						<td class="block">1</td>
					</tr>
				</table>
			</td>
		</tr>

		<tr>
			<td>
				<table>
					<tr>
						<td class="block"></td>
						${'<td class="block">1</td>'.repeat(4)}
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(3)}
						${'<td class="block">3</td>'.repeat(2)}
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(3)}
						${'<td class="block">3</td>'.repeat(2)}
					</tr>
					<tr>
						<td class="block"></td>
						<td class="block">2</td>
						${'<td class="block">1</td>'.repeat(2)}
						<td class="block">2</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						${'<td class="block">2</td>'.repeat(3)}
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(4)}
						<td class="block">6</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(4)}
						<td class="block">8</td>
					</tr>
					<tr>
						${'<td class="block">1</td>'.repeat(2)}
						<td class="block">2</td>
						${'<td class="block">1</td>'.repeat(2)}
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(3)}
						${'<td class="block">3</td>'.repeat(2)}
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">1</td>
						<td class="block">6</td>
						<td class="block">1</td>
					</tr>
				</table>
			</td>
			${playblock}
		</tr>
	</table>
</div>`;

const sixth_level = `<div class='level' id='6'>
	<table>
		<tr>
			<td></td>
			<td>
				<table>
					<tr>
						<td class="block">1</td>
						${'<td class="block">2</td>'.repeat(2)}
						${'<td class="block">1</td>'.repeat(2)}
						${'<td class="block">2</td>'.repeat(4)}
						<td class="block"></td>
						</tr>
					<tr>
						${'<td class="block">1</td>'.repeat(3)}
						<td class="block">4</td>
						<td class="block">6</td>
						<td class="block">7</td>
						<td class="block">6</td>
						<td class="block">4</td>
						<td class="block">2</td>
						<td class="block">4</td>
					</tr>
				</table>
			</td>
		</tr>

		<tr>
			<td>
				<table>
					<tr>
						${'<td class="block"></td>'.repeat(3)}
						<td class="block">4</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						${'<td class="block">2</td>'.repeat(2)}
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						${'<td class="block">1</td>'.repeat(2)}
					</tr>
					<tr>
						${'<td class="block">1</td>'.repeat(4)}
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">1</td>
						<td class="block">5</td>
					</tr>
					<tr>
						<td class="block"></td>
						<td class="block">1</td>
						<td class="block">4</td>
						<td class="block">2</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">5</td>
						<td class="block">1</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">5</td>
						<td class="block">1</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(3)}
						<td class="block">7</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(3)}
						<td class="block">5</td>
					</tr>
				</table>
			</td>
			${playblock}
		</tr>
	</table>
</div>`;

const seventh_level = `<div class='level' id='7'>
	<table>
		<tr>
			<td></td>
			<td>
				<table>
					<tr>
						${'<td class="block"></td>'.repeat(4)}
						<td class="block">2</td>
						${'<td class="block"></td>'.repeat(5)}
						</tr>
					<tr>
						<td class="block"></td>
						<td class="block">2</td>
						${'<td class="block">1</td>'.repeat(2)}
						<td class="block">2</td>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">2</td>
						<td class="block"></td>
						<td class="block">2</td>
					</tr>
					<tr>
						<td class="block">2</td>
						<td class="block">4</td>
						${'<td class="block">5</td>'.repeat(2)}
						<td class="block">2</td>
						<td class="block">6</td>
						<td class="block">4</td>
						<td class="block">5</td>
						<td class="block">8</td>
						<td class="block">7</td>
					</tr>
				</table>
			</td>
		</tr>

		<tr>
			<td>
				<table>
					<tr>
						${'<td class="block">1</td>'.repeat(4)}
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">5</td>
						<td class="block">3</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						${'<td class="block">1</td>'.repeat(2)}
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(3)}
						<td class="block">6</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(3)}
						<td class="block">7</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">2</td>
						<td class="block">5</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(3)}
						<td class="block">9</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">5</td>
						<td class="block">3</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">4</td>
						<td class="block">2</td>
					</tr>
					<tr>
						${'<td class="block"></td>'.repeat(2)}
						<td class="block">2</td>
						<td class="block">1</td>
					</tr>
				</table>
			</td>
			${playblock}
		</tr>
	</table>
</div>`;

const levels = [
	first_level,
	second_level,
	third_level,
	fourth_level,
	fifth_level,
	sixth_level,
	seventh_level,
];

export { levels };
